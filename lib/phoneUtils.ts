/**
 * Utilities for normalizing and validating Sri Lankan phone numbers.
 * Formats supported as input:
 * - Local with 0: "0771234567", "077 123 4567", "077-123-4567"
 * - International with +94: "+94771234567", "+94 77 123 4567"
 * - International with 94 / 0094: "94771234567", "0094771234567"
 * - 9 digits starting with 7: "771234567"
 *
 * Output format:
 * - Normalized: "+947XXXXXXXX" (E.164 compatible format expected by SMSlenz)
 */

export function normalizeSriLankanPhone(input: string): string | null {
  if (!input || typeof input !== "string") return null;

  // Remove spaces, hyphens, parentheses, dots
  let cleaned = input.trim().replace(/[\s\-().]/g, "");

  // Handle leading 0094 -> +94
  if (cleaned.startsWith("0094")) {
    cleaned = "+" + cleaned.slice(2);
  }

  // Handle leading 94 without + -> +94
  if (cleaned.startsWith("94") && cleaned.length === 11) {
    cleaned = "+" + cleaned;
  }

  // Handle leading 0 (e.g. 0771234567 -> +94771234567)
  if (cleaned.startsWith("0") && cleaned.length === 10) {
    cleaned = "+94" + cleaned.slice(1);
  }

  // Handle 9-digit mobile starting with 7 (e.g. 771234567 -> +94771234567)
  if (/^7[0-9]{8}$/.test(cleaned)) {
    cleaned = "+94" + cleaned;
  }

  // Validate Sri Lankan mobile format: +94 followed by 7 and 8 digits (total 12 chars)
  // Sri Lankan mobile prefixes typically: 70, 71, 72, 74, 75, 76, 77, 78
  const slMobileRegex = /^\+947[0-9]{8}$/;
  if (slMobileRegex.test(cleaned)) {
    return cleaned;
  }

  return null;
}

export function isValidSriLankanPhone(input: string): boolean {
  return normalizeSriLankanPhone(input) !== null;
}

/**
 * Formats a phone number for clean human-readable display: e.g. "+94 77 123 4567"
 */
export function formatPhoneDisplay(input: string): string {
  const normalized = normalizeSriLankanPhone(input);
  if (!normalized) return input;

  // +94 7X XXX XXXX
  const countryCode = normalized.slice(0, 3); // +94
  const prefix = normalized.slice(3, 5); // 7X
  const part1 = normalized.slice(5, 8); // XXX
  const part2 = normalized.slice(8, 12); // XXXX
  return `${countryCode} ${prefix} ${part1} ${part2}`;
}
