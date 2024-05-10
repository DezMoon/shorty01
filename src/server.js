"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());

const urlStore = {};
// POST endpoint to shorten URL
app.post("/url", (req, res) => {
  const originalUrl = req.body.url;
  // Generate short code and create shortened URL
  const shortCode = (0, utils_1.generateShortCode)();
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
