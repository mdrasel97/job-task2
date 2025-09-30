const fs = require("fs-extra");
const csv = require("csv-parser");
const path = require("path");

const results = [];

fs.createReadStream("website.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", async () => {
    for (const site of results) {
      const buildPath = path.join("build", site.domain);

      // template কপি করো
      await fs.copy("template", buildPath);

      // নিশ্চিত করো যে src ফোল্ডার আছে
      const srcPath = path.join(buildPath, "src");
      await fs.ensureDir(srcPath);

      // data.json লিখো
      const data = {
        phone: site.phone,
        address: site.address,
      };
      await fs.writeFile(
        path.join(srcPath, "data.json"),
        JSON.stringify(data, null, 2)
      );

      console.log(`${site.domain} ready!`);
    }
    console.log("All React apps generated!");
  });
