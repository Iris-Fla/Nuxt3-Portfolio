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
      <Toc selector="#article-content" class="toc">
        <Localization>
          <template #en>
            項目
          </template>
        </Localization>
      </Toc>
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
</style>
<style>
.toc .active {
  color: #8bdaff !important;
  border-color: #8bdaff;
  border-style: none none none solid;
}

.toc :hover {
  border-color: #8bdaff;
  color: #8bdaff !important;
}
.toc :hover #text{
  background-color: #8bdaff;
}

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
  display: flex;
  align-items: center;
}

h3::after {
  content: "";
  flex-grow: 1;
  height: 5px;
  background-color: #8bdaff;
  margin-left: 20px;
  border-radius: 5px;
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
  margin-top: 0.5px;
  margin-bottom: 0.5px;
  line-height: 1.9;
}

li {
  margin-top: 1em;
  margin-bottom: 1em;
}

pre {
  border-radius: 5px;
  margin-top: 2px;
  margin-bottom: 2px;
}

</style>