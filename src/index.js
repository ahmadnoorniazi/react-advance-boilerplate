import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

const rootEl = document.getElementById("root");
const render = Component =>
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) {
  module.hot.accept("./App", () => render(App));
}
