<script setup>
const $config = useRuntimeConfig();

const { data } = await useFetch("/tags", {
  baseURL: $config.public.baseURL,
  headers: {
    "X-MICROCMS-API-KEY": $config.public.apiKey,
  },
});
console.log(data.value.contents[0].id);
</script>
<template>

</template>