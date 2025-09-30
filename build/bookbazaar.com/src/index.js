import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import data from "./data.json"; // Node script add করবে

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App data={data} />);
