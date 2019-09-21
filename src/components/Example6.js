/**
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license MIT
 */
import React from "react";

import {
  Grid,
  Header,
  Icon
} from "semantic-ui-react";

/**
 * @const
 */
const Example6 = () => {
  return (
    <Grid>
      <Grid.Row columns="equal">
        <Grid.Column>
          <Header as="h2">
            6. 外部埋め込みプレイヤーの表示
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal">
        <Grid.Column textAlign="right">
          <Icon name="github" />
          <a href="https://github.com/SongleJp/tbf-songle-api/blob/master/src/example6.html" target="_blank">
            ソースコードを表示する
          </a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Example6;
