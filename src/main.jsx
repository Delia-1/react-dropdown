import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Dropdown from "./Dropdown.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Dropdown />
  </StrictMode>,
);
