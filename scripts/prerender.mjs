import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DIST = path.resolve("dist");
const SSR_ENTRY = path.resolve("dist-ssr/entry-server.js");

async function main() {
  const { render } = await import(`file://${SSR_ENTRY}`);
  const appHtml = render("/");

  const indexPath = path.join(DIST, "index.html");
  const template = await readFile(indexPath, "utf-8");
  const finalHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  await writeFile(indexPath, finalHtml);
  console.log("Prerendered dist/index.html");
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
