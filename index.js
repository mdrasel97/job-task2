const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
const csv = require("csv-parser");

const results = [];

fs.createReadStream("website.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    results.forEach((row) => {
      const targetDir = path.join(__dirname, "build", row.domain);

      // Template app
      fse.copySync(path.join(__dirname, "template-app"), targetDir);

      // React app a CSV copy
      fs.copyFileSync(
        path.join(__dirname, "website.csv"),
        path.join(targetDir, "public", "website.csv")
      );

      console.log(`${row.domain} ready!`);
    });
    console.log("All React apps generated!");
  });
