<script setup>
const { data: blog, status } = await useFetch('/api/blog');

useHead({
  title: '記事一覧',
  meta: [
    { property: 'og:title', content: 'メルの図書館' },
    { property: 'og:description', content: '私(Iris-Fla)の学んだ技術や課題解決のアウトプット一覧です。' },
    { property: 'og:type', content: 'website' }
  ]
})

const imageLoaded = ref({});

const onImageLoad = (articleId) => {
  imageLoaded.value[articleId] = true;
};
</script>

<template>
  <Container padding="10px">
    <div v-if="status === 'pending' || status === 'idle'" class="loading-indicator">
      <p>読み込み中...!</p>
    </div>
    <Row v-else>
      <Col col="12 xl-3 lg-4 md-6" v-for="article in blog.contents" :key="article.id">
        <NuxtLink :to="`/${article.id}`" style="text-decoration: none; color: inherit;">
          <Card margin="b-3" class="card-style">
            <div class="image-container">
              <div v-if="!imageLoaded[article.id]" class="skeleton-loader"></div>
              <NuxtImg
                :src="`${article.thumbnail.url}?fm=webp`"
                :alt="article.title"
                fit="cover"
                format="webp"
                placeholder
                quality="80"
                @load="onImageLoad(article.id)"
                :class="{ 'loaded': imageLoaded[article.id] }"
              />
            </div>
            <CardBody style="padding-top: 7px;">
              <CardText><SkillIcons :useSkill="$formatTags(article.tags)" /></CardText>
              <CardTitle>{{ article.title }}</CardTitle>
              <CardText small style="opacity: 0.8;">
                <BIcon margin="e-1" icon="bi:clock" />{{ $formatDate(String(article.publishedAt)) }}
              </CardText>
            </CardBody>
          </Card>
        </NuxtLink>
      </Col>
    </Row>
  </Container>
</template>

<style scoped lang="scss">

.card-style {
  color: #000000;
  background-color: #f4f2ed;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 5px #bdbdbd;
}

.card-style:hover {
  transform: scale(0.95);
}

.loading-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2em;
}

.image-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.skeleton-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.image-container img.loaded {
  opacity: 1;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>