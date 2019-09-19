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
  Menu,
} from "semantic-ui-react";

/**
 * @const
 */
const App = () => {
  return (
    <Container>
      <Grid columns="equal">
        <Grid.Column>
          <Menu text>
            <Menu.Item as={Link} to="/tbf-songle-api">
              <Icon name="home" />
              トップ
            </Menu.Item>
            <Menu.Item as="a" href="https://techbookfest.org/event/tbf07/circle/5698415509897216" target="_blank">
              <Icon name="linkify" />
              技術書典７のサークルページへ
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid>
      <Route exact path="/tbf-songle-api/" component={Home} />
      <Route exact path="/tbf-songle-api/example1.html" component={Example1} />
      <Route exact path="/tbf-songle-api/example2.html" component={Example1} />
      <Route exact path="/tbf-songle-api/example3.html" component={Example1} />
    </Container>
  );
};

/**
 * @const
 */
const Home = () => {
  return (
    <div>
      <Grid>
        <Grid.Row columns="equal">
          <Grid.Column>
            <Header as="h2">
              <Header.Content>
                Songle APIではじめる音楽情報処理ウェブプログラミング入門本
                <Header.Subheader>
                  サンプルプログラムのページ
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column>
            <List bulleted>
              <List.Item>
                <Link to="/tbf-songle-api/example1.html">サンプルプログラム１</Link>
              </List.Item>
              <List.Item>
                <Link to="/tbf-songle-api/example2.html">サンプルプログラム２</Link>
              </List.Item>
              <List.Item>
                <Link to="/tbf-songle-api/example3.html">サンプルプログラム３</Link>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
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
