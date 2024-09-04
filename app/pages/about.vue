<script setup lang="ts"></script>

<template>
  <div>
    <NuxtImg
      src="images/header.webp"
      alt="header"
      class="header-image"
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
            src="images/omen.webp"
            alt="icon"
            class="profile-icon"
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
                <Col col="2">
                  <b-a
                    href="https://forest.watch.impress.co.jp/docs/special/1598339.html"
                    margin="t-2"
                    button="primary"
                    class="button-style"
                    target="_blank"
                  >
                    <BIcon icon="bi:bookmark-fill" />
                  </b-a>
                </Col>
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
                <Col col="2">
                  <b-a
                    href="https://www.microsoft.com/ja-jp/industry/blog/microsoft-in-business/2024/04/05/case-study-utilization-of-azure-openai-service-by-students/"
                    margin="t-2"
                    button="primary"
                    class="button-style"
                    target="_blank"
                  >
                    <BIcon icon="bi:bookmark-fill" />
                  </b-a>
                </Col>
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
            <CardImg src="images/sample1.webp" alt="..." class="col-card" />
            <div class="overlay">
              <p class="overlay-text kosugi-maru-regular">文化祭ポスター</p>
            </div>
          </Card>
        </Col>
        <Col col="4">
          <Card class="image-container">
            <CardImg src="images/sample2.webp" alt="..." class="col-card" />
            <div class="overlay">
              <p class="overlay-text kosugi-maru-regular">サークルポスター</p>
            </div>
          </Card>
        </Col>
        <Col col="4">
          <Card class="image-container">
            <CardImg src="images/sample3.webp" alt="..." class="col-card" />
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
<style scoped lang="scss">
.header-image {
  width: 100%;
  height: auto;
}

.typed-text {
  font-size: 2em;
  font-weight: bold;
  color: $color-main;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0px;
}

hr {
  border: 5px solid $color-main;
  border-radius: 20px;
  width: 70%;
  opacity: 1;
  margin: 0 auto 50px auto;
}

.profile-icon {
  width: 200px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 8px $color-main;
}

.profile-text {
  color: $color-main;
}

.image-container {
  position: relative;
  display: inline-block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  .overlay-text {
    margin-top: 30px;
    color: $color-main;
    font-size: 1em;
    text-align: center;
  }
}

.overlay-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  .overlay-text {
    margin-top: 30px;
    color: $color-main;
    font-size: 1em;
    text-align: center;
  }
}

.button-style {
  background-color: $color-secondary;
  border-color: $color-secondary;
  border-radius: 50%;
  box-shadow: 0 0 5px $color-secondary;

  &:hover {
    background-color: #4d5a3d;
    border-color: #4d5a3d;
  }

  &:active {
    background-color: #4d5a3d;
    border-color: #4d5a3d;
  }

  &:focus {
    background-color: $color-secondary;
    border-color: $color-secondary;
  }
}

.image-container:hover .overlay-circle {
  opacity: 1;
}

.image-container:hover .overlay {
  opacity: 1;
}

.decorated-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  span {
    font-size: 1.5em;
    margin-top: 30px;
    position: relative;
    padding: 0 20px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 60px;
      height: 5px;
      border-radius: 5px;
      background-color: $color-main;
    }

    &::before {
      left: -70px;
    }

    &::after {
      right: -70px;
    }

    &::before::after,
    &::after::after {
      content: "";
      position: absolute;
      top: -2px;
      width: 20px;
      height: 5px;
      border-radius: 50%;
      background-color: $color-main;
    }

    &::before::after {
      right: 0;
    }

    &::after::after {
      left: 0;
    }
  }
}

.row-cards {
  max-width: 1000px;
  margin: 0 auto;

  .col-card {
    box-shadow: 0 0 8px $color-main;
  }
}

.works-card {
  background-color: $color-main;
  box-shadow: 0 0 8px $color-main;

  .title {
    color: $color-secondary;
  }
}

.background {
  background-color: $color-secondary;
  padding-bottom: 150px;
}
</style>
