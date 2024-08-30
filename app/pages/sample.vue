<template>
  <Container type="fluid">
    <Row>
      <Col col="12 lg-6" class="text-center">
        <div class="profile-text">
          <h2>自己紹介</h2>
          <p>にゃんはろ～</p>
        </div>
      </Col>
      <Col col="lg-6" class="text-center d-none d-lg-block">
        <NuxtImg src=/yuru_girl.png alt="profile" fit="cover" format="webp"
        class="profile"/>
      </Col>
    </Row>
  </Container>
</template>

<style scoped lang="scss">
.profile {
  position: sticky;
  width: 80%;
}
.profile-text {
  margin: 50px;
  background-color: $color-secondary; /* 背景色を追加 */
  color: #fff; /* テキストの色を白色に設定 */
  padding: 20px;
  border-radius: 20px;
}
</style>
