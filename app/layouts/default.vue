<template>
  <div class="defaultBackground">
    <NuxtLoadingIndicator color="#8bdaff" :height="5" :duration="4000" :throttle="100" />
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style setup>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
