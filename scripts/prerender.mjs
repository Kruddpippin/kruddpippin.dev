import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer";

const DIST = path.resolve("dist");
const PORT = 4319;

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".json": "application/json",
  ".ico": "image/x-icon",
};

function serveDist() {
  return createServer(async (req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    const filePath = path.join(DIST, urlPath === "/" ? "index.html" : urlPath);
    try {
      const data = await readFile(filePath);
      res.writeHead(200, { "Content-Type": MIME[path.extname(filePath)] || "application/octet-stream" });
      res.end(data);
    } catch {
      const fallback = await readFile(path.join(DIST, "index.html"));
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(fallback);
    }
  });
}

async function main() {
  const server = serveDist();
  await new Promise((resolve) => server.listen(PORT, resolve));

  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle0" });
    await page.waitForSelector(".hero-title", { timeout: 15000 });

    const html = await page.content();
    await writeFile(path.join(DIST, "index.html"), html);
    console.log("Prerendered dist/index.html");
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
