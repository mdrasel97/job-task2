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

      // Template app copy করো
      fse.copySync(path.join(__dirname, "template-app"), targetDir);

      // data.json লিখে দাও
      const dataJson = {
        headline: row.title,
        phone: row.phone,
        address: row.address,
      };
      fs.writeFileSync(
        path.join(targetDir, "src", "data.json"),
        JSON.stringify(dataJson, null, 2)
      );

      console.log(`${row.domain} ready!`);
    });
    console.log("All React apps generated!");
  });
