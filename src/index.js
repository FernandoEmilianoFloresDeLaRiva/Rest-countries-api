import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import IndexRouter from "./routes/IndexRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IndexRouter />
  </React.StrictMode>
);
