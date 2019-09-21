// vim: set wrap:
/**
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license MIT
 */
import React from "react";

import {
  Grid,
  Header,
  Icon,
  Image,
  List
} from "semantic-ui-react";

import Catalog1 from "../images/catalog1.jpg";
import Catalog2 from "../images/catalog2.jpg";
import Catalog3 from "../images/catalog3.jpg";
import Catalog4 from "../images/catalog4.jpg";
import Banner1 from "../images/banner1.png";
import Banner2 from "../images/banner2.png";
import Banner3 from "../images/banner3.png";

/**
 * @const
 */
const AppHome = () => {
  const listContents = [
    {
      name: "Songle APIを使ってできること",
      href: "/tbf-songle-api/example1.html"
    },
    {
      name: "Hello,Songle API !!",
      href: "/tbf-songle-api/example2.html"
    },
    {
      name: "音楽の自動再生",
      href: "/tbf-songle-api/example3.html"
    },
    {
      name: "音楽連動制御の基本プログラム",
      href: "/tbf-songle-api/example4.html"
    },
    {
      name: "プロパティを使った音楽地図のアクセス",
      href: "/tbf-songle-api/example5.html"
    },
    {
      name: "外部埋め込みプレイヤーの表示",
      href: "/tbf-songle-api/example6.html"
    },
  ];

  return (
    <Grid>
      <Grid.Row columns="equal">
        <Grid.Column>
          <Header as="h1">
            Songle APIではじめる音楽情報処理ウェブプログラミング入門本
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header
            as="h2"
            dividing>
            概要
          </Header>
          <p>
            本書では、能動的音楽鑑賞サービス「Songle」の提供する「Songle API」を紹介しながら、音楽情報処理の入門者を対象とした音楽情報処理のプログラミングについて触れていきます。
          </p>
          <p>
            能動的音楽鑑賞サービスSongleとは、音楽をより深く理解しながら、能動的に音楽を鑑賞することができるウェブサービスです。音楽理解技術と呼ばれる音楽を理解する技術により、ビートの位置、コード進行、Ａメロ・Ｂメロ・サビといった繰り返しフレーズやボーカルの音高など、音楽を構成する主な要素を自動的に解析して表示することができます。
          </p>
          <p>
            Songleが提供しているSongle APIを利用することで、音楽に関連したアプリケーションやウェブ上の好きな音楽の再生に合わせて光ったり動いたりする一体感のあるアプリケーションを手軽に開発することができます。
          </p>
          <p>
            「技術書典６」にて配布した「Songle APIではじめる音楽情報処理ウェブプログラミング入門本」に加筆する形で発行するため、前回の入門本を読んでいない方でも音楽情報処理をゼロから学ぶことができます。
          </p>
        </Grid.Column>
        <Grid.Column>
          <Header
            as="h2"
            dividing>
            立ち読み
          </Header>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <a href={Catalog1} target="_blank">
                  <Image
                    bordered
                    centered
                    size="small"
                    src={Catalog1} />
                </a>
              </Grid.Column>
              <Grid.Column>
                <a href={Catalog2} target="_blank">
                  <Image
                    bordered
                    centered
                    size="small"
                    src={Catalog2} />
                </a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <a href={Catalog3} target="_blank">
                  <Image
                    bordered
                    centered
                    size="small"
                    src={Catalog3} />
                </a>
              </Grid.Column>
              <Grid.Column>
                <a href={Catalog4} target="_blank">
                  <Image
                    bordered
                    centered
                    size="small"
                    src={Catalog4} />
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header
            as="h2"
            dividing>
            サンプルプログラム
          </Header>
          <List>
            {
              listContents.map((listContent, index) => {
                const name = listContent.name;
                const href = listContent.href;

                return (
                  <List.Item
                    key={index}
                    as="a"
                    href={href}>
                    {index + 1}. {name}
                  </List.Item>
                );
              })
            }
          </List>
        </Grid.Column>
        <Grid.Column>
          <Header
            as="h2"
            dividing>
            関連リンク
          </Header>
          <List>
            <List.Item>
              <Image
                src={Banner1}
                as="a"
                href="https://songle.jp"
                target="_blank" />
            </List.Item>
            <List.Item>
              <Image
                src={Banner2}
                as="a"
                href="https://songrium.jp"
                target="_blank" />
            </List.Item>
           <List.Item>
              <Image
                src={Banner3}
                as="a"
                href="https://textalive.jp"
                target="_blank" />
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AppHome;
