import { useEffect, useState } from "react";
import Papa from "papaparse";
import Hero from "./Hero";
import Contact from "./Contact";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Papa.parse("/website.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const row = result.data[0];

        // Hero random word
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
    <>
      <Hero headline={data.headline} />
      <Contact phone={data.phone} address={data.address} />
    </>
  );
}

export default App;
