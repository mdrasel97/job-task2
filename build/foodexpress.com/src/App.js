import React from "react";
import Hero from "./components/hero";
import Contact from "./components/contact";

export default function App({ data }) {
  const keywords = ["Quick", "Fast", "Speedy"];
  const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

  return (
    <div>
      <Hero keyword={randomKeyword} />
      <Contact phone={data.phone} address={data.address} />
    </div>
  );
}
