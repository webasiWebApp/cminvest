import { NextResponse } from "next/server";
import crypto from "crypto";
import { normalizeSriLankanPhone } from "@/lib/phoneUtils";
import { checkRateLimit, saveOtp } from "@/lib/otpStore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone } = body;

    if (!phone || typeof phone !== "string") {
      return NextResponse.json(
        { error: "Phone number is required." },
        { status: 400 }
      );
    }

    // Normalize to +947XXXXXXXX
    const normalizedPhone = normalizeSriLankanPhone(phone);
    if (!normalizedPhone) {
      return NextResponse.json(
        {
          error:
            "Invalid Sri Lankan phone number. Please enter a valid mobile number (e.g. 077 123 4567 or +94 77 123 4567).",
        },
        { status: 400 }
      );
    }

    // Rate limiting: max 3 sends per phone number per 10 minutes
    const rateLimit = checkRateLimit(normalizedPhone);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: `Too many verification requests for this number. Maximum 3 requests per 10 minutes. Please wait ${rateLimit.retryAfterMinutes} minute(s) before trying again.`,
        },
        { status: 429 }
      );
    }

    // Generate cryptographically secure 6-digit numeric OTP
    const otp = crypto.randomInt(100000, 1000000).toString();

    // Store OTP server-side with 5-minute expiry
    saveOtp(normalizedPhone, otp);

    const userId = process.env.SMSLENZ_USER_ID;
    const apiKey = process.env.SMSLENZ_API_KEY;
    // TODO: Replace "SMSlenzDEMO" with your approved sender ID once verified by SMSlenz
    const senderId = process.env.SMSLENZ_SENDER_ID || "SMSlenzDEMO";

    const smsMessage = `Your CM Investments verification code is ${otp}. Valid for 5 minutes.`;

    if (!userId || !apiKey) {
      // In development / demo mode when credentials are not yet populated in .env
      console.warn(
        `[SMSlenz Dev Mode] SMSLENZ_USER_ID or SMSLENZ_API_KEY is not configured in .env.`
      );
      console.log(
        `[SMSlenz Dev Mode] Mock OTP sent to ${normalizedPhone}: ${otp}`
      );

      return NextResponse.json({
        success: true,
        message:
          "Verification code generated (Dev Mode: see server terminal console).",
        normalizedPhone,
      });
    }

    // Send SMS via SMSlenz API
    try {
      const response = await fetch("https://smslenz.lk/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          api_key: apiKey,
          sender_id: senderId,
          contact: normalizedPhone,
          message: smsMessage,
        }),
      });

      const responseText = await response.text();
      let responseData: any = {};
      try {
        responseData = JSON.parse(responseText);
      } catch {
        responseData = { text: responseText };
      }

      if (!response.ok || responseData?.status === "error" || responseData?.status === false) {
        console.error("[SMSlenz API Error]", {
          status: response.status,
          response: responseData,
        });
        return NextResponse.json(
          {
            error:
              responseData?.message ||
              "Failed to send verification SMS. Please verify your phone number and try again.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Verification code sent via SMS.",
        normalizedPhone,
      });
    } catch (networkError: any) {
      console.error("[SMSlenz Network Error]", networkError);
      return NextResponse.json(
        {
          error:
            "Unable to reach the SMS gateway. Please check your internet connection or try again shortly.",
        },
        { status: 503 }
      );
    }
  } catch (error: any) {
    console.error("[send-otp error]", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error." },
      { status: 500 }
    );
  }
}
