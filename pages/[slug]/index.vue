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
    <main class="main">
      <h1 class="title">{{ article.title }}</h1>
      <p class="publishedAt">
        <time :datetime="article.publishedAt" v-text="article.publishedAt" />
      </p>
      <img class="thumbnail" :src="article.thumbnail.url" />
      <div class="article" v-html="body" style="width: 80%">
      </div>
    </main>
  </Container>
</template>

<style scoped>
.main {
  width: 860px;
}

.title {
  margin-bottom: 20px;
}

.publishedAt {
  margin-bottom: 40px;
}

.thumbnail {
  width: 80%;
}

</style>
<style>
.custom-image {
  width: 100%;
  height: auto;
}
</style>