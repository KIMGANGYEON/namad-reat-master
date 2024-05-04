import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { ThemeProvider, createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <ThemeProvider theme> */}
      <App />
      {/* </ThemeProvider> */}
    </RecoilRoot>
  </React.StrictMode>
);
