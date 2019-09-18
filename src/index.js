/**
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license MIT
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "../node_modules/semantic-ui-css/semantic.min.css";

import App from "./components/App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#app")
);
