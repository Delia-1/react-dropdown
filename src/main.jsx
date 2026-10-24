import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DemoDropdown from "./DemoDropdown.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DemoDropdown />
  </StrictMode>,
);
