import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import App from "./app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-background-color: #c29979;
  }

  body {
    background-color: var(--primary-background-color);
  }
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
