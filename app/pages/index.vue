<script setup lang="ts">

useHead({
  title: "メルの図書館",
  meta: [
    { property: "og:title", content: "メルの図書館" },
    {
      property: "og:description",
      content: "Iris-Flaのポートフォリオサイトです。",
    },
    { property: "og:type", content: "website" },
  ],
});

import '~/assets/css/about.scss'

</script>

<template>
  <div>
    <NuxtImg
      src="img/header.webp"
      alt="header"
      class="header-image"
      quality="80"
    />
    <Container type="fluid" class="background">
      <p class="typed-text kosugi-maru-regular">
        <Typed
          :strings="['にゃんはろ～！', 'プロフィール', 'いろいろ書いてます']"
          :type-speed="50"
          :back-delay="8000"
        />
      </p>
      <hr />
      <div class="text-center">
        <div class="image-container">
          <NuxtImg
            src="img/omen.webp"
            alt="icon"
            class="profile-icon"
            quality="80"
          />
          <div class="overlay-circle">
            <p class="overlay-text kosugi-maru-regular">
              Adobeillustratorで作成<br />"omen_bangboo"
            </p>
          </div>
        </div>
        <h1 class="kosugi-maru-regular profile-text decorated-heading">
          <span>Iris-Fla</span>
        </h1>
        <b-p margin="t-4" class="kosugi-maru-regular profile-text"
          >誰かが楽しんでもらえる作品の制作が好きです。Web開発だけでなく、動画編集やデザインも...!<br />現在はNuxt.jsを学習中です...!
        </b-p>
      </div>
      <p class="kosugi-maru-regular profile-text decorated-heading">
        <span>現在学習中</span>
      </p>
      <b-p margin="t-4" class="kosugi-maru-regular profile-text text-center"
        >Nuxt.js,AWS,MySQLを用いて薬学国家試験を受ける学生向けのサービスを構築したいです...。</b-p
      >
      <p class="kosugi-maru-regular profile-text decorated-heading">
        <span>コンテスト等</span>
      </p>
      <Row margin="t-4" style="max-width: 800px; margin: 0 auto">
        <Col col="6">
          <Card class="works-card">
            <CardBody>
              <Row>
                <Col col="10">
                  <CardTitle class="title">インテル株式会社</CardTitle>
                  <CardText class="kosugi-maru-regular">
                    OpenVino学生コンテスト:最優秀賞✨<br />
                  </CardText>
                </Col>
                <!-- <Col col="2">
                  <b-a
                    href="https://forest.watch.impress.co.jp/docs/special/1598339.html"
                    margin="t-2"
                    class="button-style"
                    target="_blank"
                  >
                    <BIcon icon="bi:bookmark-fill" />
                  </b-a>
                </Col> -->
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col col="6">
          <Card class="works-card">
            <CardBody>
              <Row>
                <Col col="10">
                  <CardTitle class="title"
                    >日本マイクロソフト株式会社</CardTitle
                  >
                  <CardText class="kosugi-maru-regular">
                    OpenAIを用いたアプリケーション開発<br />
                  </CardText>
                </Col>
                <!-- <Col col="2">
                  <b-a
                    href="https://www.microsoft.com/ja-jp/industry/blog/microsoft-in-business/2024/04/05/case-study-utilization-of-azure-openai-service-by-students/"
                    margin="t-2"
                    class="button-style"
                    target="_blank"
                  >
                    <BIcon icon="bi:bookmark-fill" />
                  </b-a>
                </Col> -->
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <p class="kosugi-maru-regular profile-text decorated-heading">
        <span>デザイン(A4サイズ)</span>
      </p>
      <Row margin="t-4" class="row-cards">
        <Col col="4">
          <Card class="image-container">
            <CardImg src="img/sample1.webp" alt="..." class="col-card" />
            <div class="overlay">
              <p class="overlay-text kosugi-maru-regular">文化祭ポスター</p>
            </div>
          </Card>
        </Col>
        <Col col="4">
          <Card class="image-container">
            <CardImg src="img/sample2.webp" alt="..." class="col-card" />
            <div class="overlay">
              <p class="overlay-text kosugi-maru-regular">サークルポスター</p>
            </div>
          </Card>
        </Col>
        <Col col="4">
          <Card class="image-container">
            <CardImg src="img/sample3.webp" alt="..." class="col-card" />
            <div class="overlay">
              <p class="overlay-text kosugi-maru-regular">サークルポスター2</p>
            </div>
          </Card>
        </Col>
      </Row>
      <p class="kosugi-maru-regular profile-text decorated-heading">
        <span>動画編集</span>
      </p>
      <Row margin="t-4" style="max-width: 800px; margin: 0 auto">
        <Col col="6">
          <Card class="works-card">
            <CardBody>
              <CardTitle class="title">ロート製薬株式会社</CardTitle>
              <CardText class="kosugi-maru-regular">
                skio vc ホワイトピールセラム<br />Instagramショート動画の製作
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col col="6">
          <Card class="works-card">
            <CardBody>
              <CardTitle class="title">株式会社 Be,想空間</CardTitle>
              <CardText class="kosugi-maru-regular">
                Youtube用のDIY動画の製作<br />サムネイルの作成
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
</template>