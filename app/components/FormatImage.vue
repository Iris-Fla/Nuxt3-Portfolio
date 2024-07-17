<template>
    <NuxtImg
      fit="cover"
      format="webp"
      :src="formatImageUrl"
      :alt="alt"
      placeholder
      loading="lazy"
    />
  </template>
  
  <script setup>
  const props = defineProps({
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  });
  
  const formatImageUrl = computed(() => `${props.src}?fm=webp`);
  </script>