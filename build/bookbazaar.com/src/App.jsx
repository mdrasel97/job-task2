import { useEffect, useState } from "react";
import Papa from "papaparse";
import Hero from "./Hero";
import Contact from "./Contact";
import { DOMAIN } from "./config";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Papa.parse("/website.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const row = result.data.find((r) => r.domain && r.domain === DOMAIN);
        if (!row) {
          console.error(`No CSV row found for domain: ${DOMAIN}`);
          return;
        }

        const headlines = ["Quick", "Fast", "Speedy"];
        const randomWord =
          headlines[Math.floor(Math.random() * headlines.length)];

        setData({
          headline: `${randomWord} delivery service in Dhaka`,
          phone: row.phone,
          address: row.address,
        });
      },
    });
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <section className="app-container">
      <div className="card">
        <div className="card-body">
          <Hero headline={data.headline} />
          <Contact phone={data.phone} address={data.address} />
        </div>
      </div>
    </section>
  );
}

export default App;
