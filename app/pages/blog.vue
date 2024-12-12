<script setup>
const { data: blog} = await useFetch("/api/blog");

useHead({
  title: "記事一覧",
  meta: [
    { property: "og:title", content: "メルの図書館" },
    {
      property: "og:description",
      content: "Iris-Flaの記事一覧",
    },
    { property: "og:type", content: "website" },
  ],
});

const imageLoaded = ref({});

const onImageLoad = (articleId) => {
  imageLoaded.value[articleId] = true;
};

import 'assets/css/blog/bloglist.scss';
</script>

<template>
    <Container padding="10px">
      <BH1 class="title">記事一覧</BH1>
      <Row>
        <Col
          margin="b-3"
          col="12 xl-3 lg-4 md-6"
          v-for="article in blog.contents"
          :key="article.id"
        >
          <NuxtLink
            :to="`/${article.id}`"
            style="text-decoration: none; color: inherit"
          >
            <Card class="card-style" relative-height="100">
              <div class="image-container">
                <div
                  v-if="!imageLoaded[article.id]"
                  class="skeleton-loader"
                ></div>
                <NuxtImg
                  :src="`${article.thumbnail.url}?fm=webp`"
                  :alt="article.title"
                  fit="cover"
                  format="webp"
                  placeholder
                  quality="50"
                  loading="lazy"
                  @load="onImageLoad(article.id)"
                  :class="{ loaded: imageLoaded[article.id] }"
                />
              </div>
              <CardBody style="padding-top: 7px">
                <CardTitle margin="t-2">{{ article.title }}</CardTitle>
                <CardText small style="opacity: 0.8; color: antiquewhite">
                  <BIcon margin="e-1" icon="bi:clock" />{{
                    $formatDate(String(article.publishedAt))
                  }}
                </CardText>
              </CardBody>
            </Card>
          </NuxtLink>
        </Col>
      </Row>
    </Container>
</template>