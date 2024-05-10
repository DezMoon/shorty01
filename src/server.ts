import express from "express";
import bodyParser from "body-parser";
import { generateShortCode } from "./utils";

const app = express();
const port = 3000;

app.use(bodyParser.json());

const urlStore: { [key: string]: string } = {};

// POST endpoint to shorten URL
app.post("/url", (req, res) => {
  const originalUrl = req.body.url;

  if (!originalUrl) {
    return res.status(400).send("Missing URL in request body");
  }

  // Generate short code and create shortened URL
  const shortCode = generateShortCode();
  const shortenedUrl = `http://localhost:${port}/${shortCode}`;

  // Store mapping of short code to original URL
  urlStore[shortCode] = originalUrl;

  // Send shortened URL to client
  res.status(201).send({ shortenedURL: shortenedUrl });
});

// GET endpoint to redirect shortened URL to original URL
app.get("/:shortCode", (req, res) => {
  const shortCode = req.params.shortCode;
  const originalUrl = urlStore[shortCode];

  if (originalUrl) {
    // Redirect to the original URL
    res.redirect(originalUrl);
  } else {
    res.status(404).send("URL not found");
  }
});

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default server; // Exporting the server instance for testing
