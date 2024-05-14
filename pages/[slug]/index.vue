<script setup>
import * as cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/agate.min.css";
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  gsap.to('.thumbnail-image', { borderRadius: '30px', duration: 1 });
});

const $config = useRuntimeConfig();
const route = useRoute();
const slug = route.params.slug;

const { data: article } = await useFetch(`/blog/${slug}`, {
  baseURL: $config.public.baseURL,
  headers: {
    "X-MICROCMS-API-KEY": $config.public.apiKey,
  },
});

const $ = cheerio.load(article.value.content);
$("pre code").each((_, elm) => {
  const result = hljs.highlightAuto($(elm).text());
  $(elm).html(result.value);
  $(elm).addClass("hljs");
});
$('img').each((_, element) => {
  $(element).html();
  $(element).addClass(`custom-image`);
});
const body = $.html();
</script>

<template>
  <Container>
    <main class="kiwi main-color">
      <h1 class="title Mochiy">{{ article.title }}<span class="Cocoa"></span></h1>
      <p class="publishedAt">
        投稿日:{{ $formatDate(String(article.publishedAt)) }}
      </p>
      <img class="thumbnail-image" :src="article.thumbnail.url" />
      <div class="article" v-html="body">
      </div>
    </main>
  </Container>
</template>

<style scoped>
.thumbnail-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: auto;
  box-shadow: 0 0 20px #a27777;
  margin-bottom: 20px;
}
</style>
<style>
.custom-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: auto;
}

h1 {
  color: #000000;
  position: relative;
  padding-bottom: 15px;
}

h1::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 10px;
  width: 100%;
  background-color: #ff8ba7;
  border-radius: 5px;
}

h2 {
  color: #f0f;
}

p {
  color: rgb(0, 0, 0);
  margin: -0.5;
}

a {
  text-decoration: none;
  color: rgb(33, 196, 224);
}

li {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>