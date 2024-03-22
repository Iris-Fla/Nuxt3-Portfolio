<script setup lang="ts">
import { VueTypedJs } from "vue3-typed-ts";
</script>
<template>
    <Container>
      <VueTypedJs
        :strings="[
          'NyanHello~!♡',
          'My name is Suiren',
          'I am learning programing!',
        ]"
        :typeSpeed="100"
        :backSpeed="100"
        :backDelay="1000"
        :loop="true"
        ><h1 class="dotGothic"><span class="typing"></span></h1>
      </VueTypedJs>
    </Container>
</template>
<style>

h1 {
  font-family: "Kiwi Maru", sans-serif;
}
</style>
