import crypto from "crypto";

export function generateShortCode(): string {
  const length = 10;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let shortCode = "";

  for (let i = 0; i < length; i++) {
    shortCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return shortCode;
}
