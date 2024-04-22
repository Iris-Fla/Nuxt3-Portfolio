<script setup lang="ts">
import * as cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/agate.min.css'

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
$('pre code', 'div[data-filename]').each((_, elm) => {
  const result = hljs.highlightAuto($(elm).text());
  $(elm).html(result.value);
  $(elm).addClass('hljs');
});
const body = $.html()
</script>


<template>
  <Container>
    <main class="main">
      <h1 class="title">{{ article.title }}</h1>
      <p class="publishedAt">
        <time :datetime="article.publishedAt" v-text="article.publishedAt" />
      </p>
      <img class="thumbnail" :src="article.thumbnail.url" />
      <div class="article" v-html="body" />
    </main>
  </Container>
</template>

<style scoped>
.main {
  width: 860px;
  margin: 0 auto;
}

.title {
  margin-bottom: 20px;
}

.publishedAt {
  margin-bottom: 40px;
}

.article img {
  width: 50%;
}


.thumbnail {
  width: 80%;
}
</style>