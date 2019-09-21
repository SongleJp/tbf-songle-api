/**
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license MIT
 */
import React from "react";
import { Link, Route } from "react-router-dom";

import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  List,
  Menu
} from "semantic-ui-react";

import AppMenu from "./AppMenu";
import AppHome from "./AppHome";

/**
 * @const
 */
const App = () => {
  return (
    <Container>
      <AppMenu />
      <Route exact path="/tbf-songle-api/" component={AppHome} />
      <Route exact path="/tbf-songle-api/example1.html" component={Example1} />
      <Route exact path="/tbf-songle-api/example2.html" component={Example1} />
      <Route exact path="/tbf-songle-api/example3.html" component={Example1} />
      <Route exact path="/tbf-songle-api/example4.html" component={Example1} />
      <Route exact path="/tbf-songle-api/example5.html" component={Example1} />
      <Route exact path="/tbf-songle-api/example6.html" component={Example1} />
    </Container>
  );
};

/**
 * @const
 */
const Example1 = () => {
  return (
    <div>
      <Grid>
        <Grid.Row columns="equal">
          <Grid.Column>
            <Header as="h2">
              サンプルプログラム１
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column>
            Test
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default App;
