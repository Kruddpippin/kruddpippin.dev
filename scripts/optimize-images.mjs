import sharp from "sharp";
import path from "node:path";

const PUBLIC = path.resolve("public");

const jobs = [
  { src: "didi-couture.jpg.png", out: "didi-couture.webp", width: 900 },
  { src: "mayen-s-touch.jpg.png", out: "mayen-s-touch.webp", width: 900 },
  { src: "stayflow.png", out: "stayflow.webp", width: 900 },
  { src: "photo-studio.jpg.png", out: "photo-studio.webp", width: 900 },
  { src: "skin-care,jpg.png", out: "skin-care.webp", width: 900 },
  { src: "hero-showcase.jpg", out: "hero-showcase.webp", width: 1100 },
];

for (const job of jobs) {
  const srcPath = path.join(PUBLIC, job.src);
  const outPath = path.join(PUBLIC, job.out);
  const before = (await sharp(srcPath).metadata());
  await sharp(srcPath)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outPath);
  const after = await sharp(outPath).metadata();
  const { size: beforeBytes } = await import("node:fs").then((fs) => fs.promises.stat(srcPath));
  const { size: afterBytes } = await import("node:fs").then((fs) => fs.promises.stat(outPath));
  console.log(
    `${job.src} (${before.width}x${before.height}, ${(beforeBytes / 1024).toFixed(0)}KB) -> ` +
    `${job.out} (${after.width}x${after.height}, ${(afterBytes / 1024).toFixed(0)}KB)`
  );
}
