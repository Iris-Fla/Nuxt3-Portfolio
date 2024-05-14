<template>
  <div class="defaultBackground kiwi">
    <Header />
    <slot />
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
