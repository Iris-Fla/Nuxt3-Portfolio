<script setup>
import "highlight.js/styles/agate.css";
import * as cheerio from "cheerio";
import hljs from "highlight.js";
import "~/assets/css/blog/index.scss";

import { gsap } from "gsap";

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
$("img").each((_, element) => {
  $(element).addClass(`custom-image`);
});
$("table").each((_, element) => {
  $(element).addClass("table border-top-color table-bordered");
});

const body = $.html();

onMounted(() => {
  gsap.to(".thumbnail-image", { borderRadius: "30px", duration: 1 });
});
</script>

<template>
  <div>
    <Container>
      <main class="main-color" id="custom-toc">
        <Row justify-content="end">
          <Col col="12 lg-8">
            <BH1 class="title"
              >{{ article.title }}<span class="Cocoa"></span
            ></BH1>
            <b-p class="publishedAt">
              投稿日:{{ $formatDate(String(article.publishedAt)) }}
            </b-p>
            <NuxtImg
              class="thumbnail-image"
              :src="article.thumbnail.url"
              :alt="article.title"
              fit="cover"
              format="webp"
              placeholder
              loading="lazy"
            />
            <Toc
              selector="#article-content"
              class="toc d-lg-none"
            >
              <Localization>
                <template #en> 項目 </template>
              </Localization>
            </Toc>
            <div
              v-if="body"
              class="article"
              v-html="body"
              id="article-content"
            ></div>
          </Col>
          <Col col="lg-2">
            <Toc
              selector="#article-content"
              class="toc d-none d-lg-block sticky-toc"
              id="custom-toc"
            >
              <Localization>
                <template #en> 項目 </template>
              </Localization>
            </Toc>
          </Col>
        </Row>
      </main>
    </Container>
  </div>
</template>
