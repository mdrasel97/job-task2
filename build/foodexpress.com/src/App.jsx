import Contact from "./Contact";
import data from "./data.json";
import Hero from "./Hero";

function App() {
  return (
    <>
      <Hero headline={data.headline} />
      <Contact phone={data.phone} address={data.address} />
    </>
  );
}

export default App;
