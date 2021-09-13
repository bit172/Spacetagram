import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";

import App from "./App";

import GlobalStyles from "./styles/global.styles";
import Typography from "./styles/typography.styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Typography />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
