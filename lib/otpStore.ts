interface OtpEntry {
  otp: string;
  expiresAt: number;
  attempts: number;
}

interface RateLimitEntry {
  count: number;
  windowStart: number;
}

// Global store to survive Next.js module reloading in development
interface GlobalOtpState {
  otpMap: Map<string, OtpEntry>;
  rateLimitMap: Map<string, RateLimitEntry>;
}

const globalForOtp = globalThis as unknown as {
  __cm_otp_state__?: GlobalOtpState;
};

if (!globalForOtp.__cm_otp_state__) {
  globalForOtp.__cm_otp_state__ = {
    otpMap: new Map(),
    rateLimitMap: new Map(),
  };
}

const { otpMap, rateLimitMap } = globalForOtp.__cm_otp_state__;

// 10 minutes rate limit window
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
// Max 3 OTP sends per window
const MAX_SENDS_PER_WINDOW = 3;
// 5 minutes OTP expiry
const OTP_EXPIRY_MS = 5 * 60 * 1000;
// Maximum allowed failed verification attempts
const MAX_VERIFY_ATTEMPTS = 5;

/**
 * Checks if the phone number is permitted to send a new OTP under the rate limit.
 * Max 3 requests per 10 minutes.
 */
export function checkRateLimit(phone: string): {
  allowed: boolean;
  remainingSends: number;
  retryAfterMinutes?: number;
} {
  const now = Date.now();
  const entry = rateLimitMap.get(phone);

  if (!entry || now - entry.windowStart >= RATE_LIMIT_WINDOW_MS) {
    return { allowed: true, remainingSends: MAX_SENDS_PER_WINDOW };
  }

  if (entry.count >= MAX_SENDS_PER_WINDOW) {
    const remainingMs = entry.windowStart + RATE_LIMIT_WINDOW_MS - now;
    const retryAfterMinutes = Math.max(1, Math.ceil(remainingMs / 60000));
    return {
      allowed: false,
      remainingSends: 0,
      retryAfterMinutes,
    };
  }

  return {
    allowed: true,
    remainingSends: MAX_SENDS_PER_WINDOW - entry.count,
  };
}

/**
 * Records an OTP send event for rate limiting and saves the generated OTP with a 5-minute expiry.
 */
export function saveOtp(phone: string, otp: string): void {
  const now = Date.now();

  // Update rate limit
  const rateEntry = rateLimitMap.get(phone);
  if (!rateEntry || now - rateEntry.windowStart >= RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(phone, {
      count: 1,
      windowStart: now,
    });
  } else {
    rateEntry.count += 1;
  }

  // Save OTP with 5-minute TTL
  otpMap.set(phone, {
    otp,
    expiresAt: now + OTP_EXPIRY_MS,
    attempts: 0,
  });
}

/**
 * Verifies an OTP against the stored code for the phone number.
 * Enforces expiry, attempt limits, and single-use invalidation.
 */
export function verifyOtp(
  phone: string,
  enteredOtp: string
): { success: boolean; error?: string } {
  const entry = otpMap.get(phone);
  const now = Date.now();

  if (!entry) {
    return {
      success: false,
      error: "No active verification code found. Please request a new code.",
    };
  }

  // Check expiry
  if (now > entry.expiresAt) {
    otpMap.delete(phone);
    return {
      success: false,
      error: "Verification code has expired. Please request a new code.",
    };
  }

  // Check attempts
  entry.attempts += 1;
  if (entry.attempts > MAX_VERIFY_ATTEMPTS) {
    otpMap.delete(phone);
    return {
      success: false,
      error: "Too many failed attempts. Please request a new code.",
    };
  }

  // Verify match (trim and string comparison)
  if (entry.otp === enteredOtp.trim()) {
    // Invalidate OTP after single successful use
    otpMap.delete(phone);
    return { success: true };
  }

  const remainingAttempts = MAX_VERIFY_ATTEMPTS - entry.attempts;
  return {
    success: false,
    error: `Incorrect verification code. ${
      remainingAttempts > 0
        ? `${remainingAttempts} attempt${remainingAttempts === 1 ? "" : "s"} remaining.`
        : "Please request a new code."
    }`,
  };
}
