import { NextResponse } from "next/server";
import { normalizeSriLankanPhone } from "@/lib/phoneUtils";
import { verifyOtp } from "@/lib/otpStore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, otp } = body;

    if (!phone || typeof phone !== "string") {
      return NextResponse.json(
        { error: "Phone number is required." },
        { status: 400 }
      );
    }

    if (!otp || typeof otp !== "string" || otp.trim().length !== 6) {
      return NextResponse.json(
        { error: "Please enter a valid 6-digit verification code." },
        { status: 400 }
      );
    }

    const normalizedPhone = normalizeSriLankanPhone(phone);
    if (!normalizedPhone) {
      return NextResponse.json(
        { error: "Invalid Sri Lankan phone number format." },
        { status: 400 }
      );
    }

    const result = verifyOtp(normalizedPhone, otp);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Verification failed." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Phone number verified successfully.",
      verifiedPhone: normalizedPhone,
    });
  } catch (error: any) {
    console.error("[verify-otp error]", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error." },
      { status: 500 }
    );
  }
}
