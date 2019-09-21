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
const Example3 = () => {
  return (
    <Grid>
      <Grid.Row columns="equal">
        <Grid.Column>
          <Header as="h2">
            3. 音楽の自動再生
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Example3;
