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

  // Generate short code and create shortened URL
  const shortCode = generateShortCode();
  const shortenedUrl = `http://localhost:${port}/${shortCode}`;

  // Store mapping of short code to original URL
  urlStore[shortCode] = originalUrl;

  // Send shortened URL to client
  res.send({ shortenedURL: shortenedUrl });
});

// GET endpoint to redirect shortened URL to original URL
app.get("/:shortCode", (req, res) => {
  const shortCode = req.params.shortCode;
  const originalUrl = urlStore[shortCode];

  if (originalUrl) {
    res.json({ url: originalUrl });
  } else {
    res.status(404).send("URL not found");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
