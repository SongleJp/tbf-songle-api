/**
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license MIT
 */
import React from "react";

import {
  Grid,
  Icon,
  Menu
} from "semantic-ui-react";

/**
 * @const
 */
const AppMenu = () => {
  return (
    <Grid columns="equal">
      <Grid.Column>
        <Menu text>
          <Menu.Item as="a" href="/tbf-songle-api">
            <Icon name="home" />
            トップ
          </Menu.Item>
          <Menu.Item as="a" href="https://techbookfest.org/event/tbf07/circle/5698415509897216" target="_blank">
            <Icon name="linkify" />
            技術書典７のサークルページ
          </Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid>
  );
};

export default AppMenu;
