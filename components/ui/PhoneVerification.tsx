"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CheckCircle2, AlertCircle, Loader2, RefreshCw, ShieldCheck } from "lucide-react";
import { normalizeSriLankanPhone, isValidSriLankanPhone, formatPhoneDisplay } from "@/lib/phoneUtils";

export interface PhoneVerificationProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  onVerifiedChange: (isVerified: boolean) => void;
  required?: boolean;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  disabled?: boolean;
  placeholder?: string;
}

export function PhoneVerification({
  id = "phone",
  name = "phone",
  value,
  onChange,
  onVerifiedChange,
  required = true,
  label = "Phone Number *",
  labelClassName = "block text-sm font-medium text-navy-dark mb-2",
  inputClassName = "w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-light focus:border-transparent transition-all",
  disabled = false,
  placeholder = "+94 77 000 0000",
}: PhoneVerificationProps) {
  const [isVerified, setIsVerified] = useState(false);
  const [verifiedNumber, setVerifiedNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");

  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Resend countdown timer (60 seconds)
  const [countdown, setCountdown] = useState(0);
  const otpInputRef = useRef<HTMLInputElement>(null);

  // Notify parent of verification state changes
  useEffect(() => {
    onVerifiedChange(isVerified);
  }, [isVerified, onVerifiedChange]);

  // Handle countdown timer
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  // Detect phone number edits after verification
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    onChange(rawVal);
    setErrorMessage("");

    // If already verified and user modifies the number, reset verification
    if (isVerified) {
      setIsVerified(false);
      setVerifiedNumber("");
      setShowOtpInput(false);
      setOtp("");
      setSuccessMessage("");
    }
  };

  // Send OTP
  const handleSendOtp = async () => {
    if (!value.trim()) {
      setErrorMessage("Please enter a phone number.");
      return;
    }

    const normalized = normalizeSriLankanPhone(value);
    if (!normalized) {
      setErrorMessage(
        "Please enter a valid Sri Lankan mobile number (e.g. 077 123 4567 or +94 77 123 4567)."
      );
      return;
    }

    setErrorMessage("");
    setSuccessMessage("");
    setSendingOtp(true);

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: normalized }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || "Failed to send verification code. Please try again.");
      } else {
        setShowOtpInput(true);
        setCountdown(60); // 60 seconds cooldown
        setSuccessMessage(`Code sent to ${formatPhoneDisplay(normalized)}`);
        setTimeout(() => {
          otpInputRef.current?.focus();
        }, 200);
      }
    } catch (err: any) {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setSendingOtp(false);
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    if (otp.trim().length !== 6) {
      setErrorMessage("Please enter the 6-digit code received via SMS.");
      return;
    }

    const normalized = normalizeSriLankanPhone(value);
    if (!normalized) {
      setErrorMessage("Invalid phone number. Please re-enter your number.");
      return;
    }

    setErrorMessage("");
    setVerifyingOtp(true);

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: normalized, otp: otp.trim() }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || "Invalid verification code.");
      } else {
        setIsVerified(true);
        setVerifiedNumber(normalized);
        setShowOtpInput(false);
        setErrorMessage("");
        setSuccessMessage("Phone number verified successfully!");
      }
    } catch (err: any) {
      setErrorMessage("Network error during verification. Please try again.");
    } finally {
      setVerifyingOtp(false);
    }
  };

  const isPhoneValid = isValidSriLankanPhone(value);

  return (
    <div className="space-y-3">
      {/* Label and Verified Badge */}
      <div className="flex items-center justify-between">
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
        {isVerified && (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Verified
          </span>
        )}
      </div>

      {/* Main Input Row */}
      <div className="relative flex items-center">
        <div className="relative w-full">
          <input
            id={id}
            name={name}
            type="tel"
            required={required}
            disabled={disabled || isVerified}
            value={value}
            onChange={handlePhoneChange}
            placeholder={placeholder}
            className={`${inputClassName} ${
              isVerified
                ? "!border-emerald-400 !bg-emerald-50/30 text-neutral-800 pr-24 font-medium"
                : "pr-28"
            }`}
          />

          {/* Action button inside input */}
          <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center">
            {isVerified ? (
              <button
                type="button"
                onClick={() => {
                  setIsVerified(false);
                  setVerifiedNumber("");
                  setShowOtpInput(false);
                  setOtp("");
                  setSuccessMessage("");
                }}
                className="text-xs text-neutral-500 hover:text-navy-dark px-2.5 py-1 rounded-md transition-colors bg-white/80 hover:bg-neutral-100 font-medium"
                title="Change and re-verify phone number"
              >
                Change
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSendOtp}
                disabled={disabled || sendingOtp || !isPhoneValid || (showOtpInput && countdown > 0)}
                className={`text-xs font-semibold px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-xs ${
                  isPhoneValid && (!showOtpInput || countdown === 0)
                    ? "bg-[#081B52] text-white hover:bg-[#0c256e] active:scale-95 cursor-pointer"
                    : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                }`}
              >
                {sendingOtp ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : showOtpInput && countdown > 0 ? (
                  <span>Sent</span>
                ) : (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verify</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Helper Format Hint (when not verified and no error) */}
      {!isVerified && !showOtpInput && !errorMessage && (
        <p className="text-[11px] text-neutral-500 leading-tight">
          Sri Lankan mobile format (e.g., 077 123 4567 or +94 77 123 4567). Verification via SMS OTP is required.
        </p>
      )}

      {/* OTP Verification Panel */}
      <AnimatePresence>
        {showOtpInput && !isVerified && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="bg-slate-50 border border-neutral-200 rounded-xl p-4 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-navy-dark flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Enter 6-Digit SMS Code
                </span>
                <span className="text-neutral-500">
                  {countdown > 0 ? (
                    <span className="text-neutral-500 font-mono">
                      Resend in {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, "0")}
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={sendingOtp}
                      className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" /> Resend Code
                    </button>
                  )}
                </span>
              </div>

              <div className="flex gap-2">
                <input
                  ref={otpInputRef}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 6);
                    setOtp(cleaned);
                    setErrorMessage("");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && otp.length === 6) {
                      e.preventDefault();
                      handleVerifyOtp();
                    }
                  }}
                  placeholder="------"
                  className="w-full text-center tracking-[0.4em] font-mono text-lg font-bold py-2.5 px-3 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-light text-navy-dark placeholder:tracking-normal placeholder:font-sans placeholder:text-sm placeholder:text-neutral-300"
                />
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={verifyingOtp || otp.length !== 6}
                  className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 min-w-[105px] ${
                    otp.length === 6 && !verifyingOtp
                      ? "bg-navy-dark text-white hover:bg-navy-light active:scale-95 cursor-pointer shadow-xs"
                      : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                  }`}
                >
                  {verifyingOtp ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Verifying</span>
                    </>
                  ) : (
                    <span>Confirm</span>
                  )}
                </button>
              </div>

              {successMessage && !errorMessage && (
                <p className="text-xs text-emerald-700 bg-emerald-50/80 px-2.5 py-1.5 rounded-md border border-emerald-100 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  {successMessage}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline Error Message */}
      {errorMessage && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-600 bg-red-50 border border-red-100 px-3 py-2 rounded-lg flex items-start gap-2"
        >
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <span className="leading-snug">{errorMessage}</span>
        </motion.div>
      )}
    </div>
  );
}
