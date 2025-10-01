const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
const csv = require("csv-parser");

// CSV read results
const results = [];

// Build folder
const buildDir = path.join(__dirname, "build");
if (!fs.existsSync(buildDir)) fs.mkdirSync(buildDir);

// Read CSV
fs.createReadStream("website.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    results.forEach((row) => {
      const targetDir = path.join(buildDir, row.domain);

      // Copy template app
      fse.copySync(path.join(__dirname, "template-app"), targetDir);

      // Copy website.csv to public folder
      const publicDir = path.join(targetDir, "public");
      if (!fs.existsSync(publicDir))
        fs.mkdirSync(publicDir, { recursive: true });
      fs.copyFileSync(
        path.join(__dirname, "website.csv"),
        path.join(publicDir, "website.csv")
      );

      // Create config.js inside src
      const srcDir = path.join(targetDir, "src");
      const configContent = `
// This file is auto-generated. Do not edit manually.
export const DOMAIN = "${row.domain}";
`;
      fs.writeFileSync(path.join(srcDir, "config.js"), configContent, "utf8");

      console.log(`${row.domain} ready!`);
    });

    console.log("All React apps generated successfully!");
  });
