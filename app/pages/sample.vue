<script setup lang="ts">

const showProfileImage = ref(false);
const animationClass = ref('');

onMounted(() => {
  setTimeout(() => {
    showProfileImage.value = true;
    animationClass.value = 'fade-in';
    setTimeout(() => {
      animationClass.value = 'bounce';
    }, 1000);
  }, 4000);
})

onUnmounted(() => {
  console.log(`コンポーネントがアンマウントされました。`)
})

</script>

<template>
  <Container type="fluid">
    <Row>
      <Col col="12 lg-6" class="text-center">
        <div class="profile-text">
          <h2>自己紹介</h2>
          <hr>
          <p><Typed class="typed-text" :strings="['にゃんはろ～！、このページでは私の活動記録とかを載せていきます～！']" :type-speed="50" :backDelay="100000000"/></p>
        </div>
      </Col>
      <Col col="lg-6" class="text-center d-none d-lg-block">
        <NuxtImg v-if="showProfileImage" :class="animationClass" src=/yuru_girl.png alt="profile" fit="cover" format="webp"
        class="profile"/>
      </Col>
    </Row>
  </Container>
</template>
<style scoped lang="scss">
.profile {
  position: sticky;
  width: 60%;
}
.profile-text {
  margin: 50px;
  background-color: $color-secondary;
  color: $color-white;
  padding: 20px;
  border-radius: 20px;
  h2 {
    color: $color-white;
  }
  .typed-text {
    font-size: 1.3em;
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.bounce {
  animation: bounce 1s;
  animation-iteration-count: 1;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
