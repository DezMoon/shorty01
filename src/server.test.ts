import request from "supertest";
import server from "./server"; // Import the server instance

describe("POST /url", () => {
  it("should return a shortened URL when given a valid URL", async () => {
    const response = await request(server)
      .post("/url")
      .send({ url: "https://example.com" });

    expect(response.status).toBe(201); // Expect 201 for Created
    expect(response.body).toHaveProperty("shortenedURL");
  });
});

describe("GET /:shortCode", () => {
  it("should redirect to the original URL when given a valid short code", async () => {
    // Make a POST request to obtain a shortened URL
    const postResponse = await request(server)
      .post("/url")
      .send({ url: "https://example.com" });

    const shortCode = postResponse.body.shortenedURL.split("/").pop();

    // Make a GET request using the obtained short code
    const getResponse = await request(server).get(`/${shortCode}`);

    expect(getResponse.status).toBe(302); // Expect 302 for Redirect
    expect(getResponse.header.location).toBe("https://example.com");
  });
});
