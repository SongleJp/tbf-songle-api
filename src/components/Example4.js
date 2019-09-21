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
const Example4 = () => {
  return (
    <Grid>
      <Grid.Row columns="equal">
        <Grid.Column>
          <Header as="h2">
            4. 音楽連動制御の基本プログラム
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Example4;
