<script setup>
import * as cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/agate.min.css";

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
      <h1 class="title">{{ article.title }}<span class="Cocoa"></span></h1>
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

.title {
  margin-bottom: 20px;
  position: relative;
}

.title::after {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  background: #ffffff;
  border-radius: 50%;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
}

.publishedAt {
  margin-bottom: 40px;
}

.thumbnail-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: auto;
  view-transition-name: thumbnail-image;
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
</style>