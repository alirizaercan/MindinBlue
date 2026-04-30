const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const buildDir = path.join(rootDir, "build");
const enDir = path.join(buildDir, "en");

const copies = [
  ["static", "static"],
  ["index.html", "index.html"],
  ["asset-manifest.json", "asset-manifest.json"],
];

for (const [source, destination] of copies) {
  const sourcePath = path.join(buildDir, source);
  const destinationPath = path.join(enDir, destination);

  fs.cpSync(sourcePath, destinationPath, {
    recursive: true,
    force: true,
  });
}

console.log("Copied production build assets into build/en.");
