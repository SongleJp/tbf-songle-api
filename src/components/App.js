/**
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license MIT
 */
import React from "react";
import { Link, Route } from "react-router-dom";

import {
  Container
} from "semantic-ui-react";

import AppMenu from "./AppMenu";
import AppHome from "./AppHome";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";
import Example5 from "./Example5";
import Example6 from "./Example6";

/**
 * @const
 */
const App = () => {
  return (
    <Container>
      <AppMenu />
      <Route exact path="/tbf-songle-api/" component={AppHome} />
      <Route exact path="/tbf-songle-api/example1.html" component={Example1} />
      <Route exact path="/tbf-songle-api/example2.html" component={Example2} />
      <Route exact path="/tbf-songle-api/example3.html" component={Example3} />
      <Route exact path="/tbf-songle-api/example4.html" component={Example4} />
      <Route exact path="/tbf-songle-api/example5.html" component={Example5} />
      <Route exact path="/tbf-songle-api/example6.html" component={Example6} />
    </Container>
  );
};

export default App;
