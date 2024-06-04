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
console.log(article)

const $ = cheerio.load(article.value.content);
$("pre code").each((_, elm) => {
  const result = hljs.highlightAuto($(elm).text());
  $(elm).html(result.value);
  $(elm).addClass("hljs");
});
$('img').each((_, element) => {
  $(element).addClass(`custom-image`);
});
$("table").each((_, element) => {
  $(element).addClass("table border-top-color table-bordered");
});

const body = $.html();
</script>

<template>
  <Container>
    <main class="kiwi main-color">
      <BH1 class="title">{{ article.title }}<span class="Cocoa"></span></BH1>
      <b-p class="publishedAt">
        投稿日:{{ $formatDate(String(article.publishedAt)) }}
      </b-p>
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
  box-shadow: 0 0 20px #5c5c5c;
  margin-bottom: 50px;
  margin-top: 50px;
}
</style>
<style>
.custom-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: auto;
  box-shadow: 0 0 10px #bdbdbd;
  margin-top:20px;
  margin-bottom: 20px;
}

h1 {
  color: #000000;
  position: relative;
  padding-bottom: 15px;
  margin-top: 50px;
  margin-bottom: 20px;
}

h3 {
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: rgb(29, 166, 190);
}

h1::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 6px;
  width: 100%;
  background-color: #8bdaff;
  border-radius: 5px;
}

h2 {
  color:rgb(0, 0, 0);
  margin-top: 40px;
  margin-bottom: 20px;
  position: relative;
}
h2::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: -8px;
  height: 3px;
  width: 100%;
  background-color: #aaaaaa;
  border-radius: 3px;
}

p {
  color: rgb(0, 0, 0);
  margin: 0.5px;
}

li {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>