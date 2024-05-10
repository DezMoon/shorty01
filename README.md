# Shorty

Shorty is a simple URL shortening service implemented in Node.js with TypeScript. It provides an API for shortening long URLs into shorter, more manageable ones.

## Features

- Shorten long URLs into short, unique codes
- Redirect shortened URLs to their original destinations

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/DezMoon/shorty01.git
    ```

2. Navigate to the project directory:

    ```bash
    cd shorty
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Compile TypeScript files:

    ```bash
    npm run build
    ```

5. Start the server:

    ```bash
    npm start
    ```

## Usage

### Shorten a URL

To shorten a URL, send a POST request to the `/url` endpoint with a JSON body containing the original URL:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"url": "https://example.com"}' http://localhost:3000/url
```

### Retrieve the original URL

To retrieve the original URL associated with a shortened URL, send a GET request to the shortened URL:

```bash
curl http://localhost:3000/{shortCode}
```

Replace {shortCode} with the short code generated for the URL.

## Technologies Used

- Node.js
- TypeScript
- Express.js
- shortid




