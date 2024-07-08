<script setup>
import 'highlight.js/styles/agate.css';
import * as cheerio from "cheerio";
import hljs from "highlight.js";


import { gsap } from 'gsap';

const route = useRoute();
const slug = route.params.slug;

const { data: article } = await useFetch(`/api/blog/${slug}`);

useHead({
  title: article.value.title,
  meta: [
    { property: "og:title", content: article.value.title },
    {
      property: "og:description",
      content: article.value.description,
    },
    { property: "og:type", content: "article" },
    { property: "og:image", content: article.value.thumbnail.url },
  ],
});


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

onMounted(() => {
  gsap.to('.thumbnail-image', { borderRadius: '30px', duration: 1 });
});
</script>

<template>
  <Container>
    <main class="kiwi main-color">
      <BH1 class="title">{{ article.title }}<span class="Cocoa"></span></BH1>
      <b-p class="publishedAt">
        投稿日:{{ $formatDate(String(article.publishedAt)) }}
      </b-p>
      <FormatImage :src="article.thumbnail.url" :alt="article.title" class="thumbnail-image" />
      <Toc class="toc" selector="#article-content" />
      <div v-if="body" class="article" v-html="body" id="article-content">
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

.toc :active{
  border-color:rgb(29, 166, 190);
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
  margin-top: 2em;
  margin-bottom: 2em;
}

pre {
  margin:5px;
}


</style>