import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App
      onClick={() => console.log("It clicks")}
      color="blue"
      disabled={false}
      text="ButtonText"
    />
  </StrictMode>
);
