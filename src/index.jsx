/* eslint-disable quotes */
import React from "react";
import ReactDOM from "react-dom";
import Provider from "store";
import ErrorBoundary from "ErrorBoundary";
import App from "./App";
import "wow.scss";
ReactDOM.render(
  <ErrorBoundary>
    <Provider>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById("app"),
);
