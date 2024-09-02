<script setup lang="ts"></script>

<template>
  <NuxtImg src="./Header.png" alt="Header" format="webp" class="header-image" />
  <Container type="fluid" class="background">
    <p class="typed-text kosugi-maru-regular">
      <Typed
        :strings="['にゃんはろ～！', 'プロフィールです。']"
        :type-speed="50"
        :back-delay="1000000"
      />
    </p>
    <hr />
    <div class="text-center">
      <NuxtImg
        src="./omen_bangboo.png"
        alt="icon"
        format="webp"
        class="profile-icon"
      />
    </div>
  </Container>
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
}

.background {
  background-color: $color-secondary;
}
</style>
