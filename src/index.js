/**
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license MIT
 */
import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router
} from "react-router-dom";

import App from "./components/App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#app")
);
