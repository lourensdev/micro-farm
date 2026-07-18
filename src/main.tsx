import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import App from "./app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --green-color: #85be8c;
    --brown-color: #c29979;
    --dark-green-color: #333c3a;
  }

  body {
    background-color: var(--green-color);
  }
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
