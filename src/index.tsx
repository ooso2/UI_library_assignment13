import React from "react";
import ReactDOM from "react-dom/client";
import "./components/Button/Button.module.css";
import { App } from "./App";

export const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
