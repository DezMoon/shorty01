import shortid from "shortid";

// Generate a random 10 character code
export function generateShortCode(): string {
  return shortid.generate().substring(0, 10);
}
