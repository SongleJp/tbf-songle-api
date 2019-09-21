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
const Example5 = () => {
  return (
    <Grid>
      <Grid.Row columns="equal">
        <Grid.Column>
          <Header as="h2">
            5. プロパティを使った音楽地図のアクセス
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal">
        <Grid.Column textAlign="right">
          <Icon name="github" />
          <a href="https://github.com/SongleJp/tbf-songle-api/blob/master/src/example5.html" target="_blank">
            ソースコードを表示する
          </a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Example5;
