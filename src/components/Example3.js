/**
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license MIT
 */
import React from "react";

import {
  Grid,
  Header,
  Icon,
  Message
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
      <Grid.Row columns="equal">
        <Grid.Column textAlign="right">
          <Icon name="github" />
          <a href="https://github.com/SongleJp/tbf-songle-api/blob/master/src/example3.html" target="_blank">
            ソースコードを表示する
          </a>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal">
        <Grid.Column>
          <Message info>
            <Message.Header>
              <Icon name="info" />
              自動再生が正常にされない場合
            </Message.Header>
            <p>
              自動再生をするためには、事前に外部サービスの埋め込み動画もしくは任意のHTML要素をクリックが必要となる場合があります。
              この問題は多くの場合、モバイルデバイスからアクセスした場合に発生します（<a href="https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio">この問題の技術情報</a>）。
            </p>
          </Message>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Example3;
