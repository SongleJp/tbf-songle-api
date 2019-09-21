/**
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license MIT
 */
import React from "react";

import {
  Grid,
  Header
} from "semantic-ui-react";

/**
 * @const
 */
const Example1 = () => {
  return (
    <Grid>
      <Grid.Row columns="equal">
        <Grid.Column>
          <Header as="h2">
            1. Songle APIを使ってできること
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Example1;
