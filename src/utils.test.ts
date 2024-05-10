import { generateShortCode } from "./utils";

describe("generateShortCode", () => {
  it("should generate a random 10-character code", () => {
    const shortCode = generateShortCode();
    expect(shortCode).toHaveLength(10); // To Check the length
    expect(shortCode).toMatch(/^[a-zA-Z0-9]+$/); // To check if it contains only letters and numbers
  });
});
