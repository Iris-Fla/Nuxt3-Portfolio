<script setup>
const $config = useRuntimeConfig();
const { data:blog } = await useFetch("/blog", {
  baseURL: $config.public.baseURL,
  headers: {
    "X-MICROCMS-API-KEY": $config.public.apiKey,
  },
});
</script>
<template>
  <Container padding="10px">
    <Row>
      <Col col="12 md-4" v-for="article in blog.contents" :key="article.id">
      <NuxtLink :to="`/${article.id}`" style="text-decoration: none; color: inherit;">
        <Card margin="b-3" :to="`/${article.id}`" class="card-style">
          <CardImgTop :src="article.thumbnail.url" alt="Article image" class="thumbnail-image" />
          <CardBody>
            <CardTitle margin="b-3"><strong>{{ article.title }}</strong></CardTitle>
            <div class="tag-style">
              <p v-for="tag in article.tags" :key="tag.id">
                    {{ tag.name }}
              </p>
            </div>
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
<style scoped>
.card-style {
  color: #33272a;
  background-color: #fffffe;
  transition: all 0.3s ease-in-out;
}

.card-style:hover {
  transform: scale(0.95);
}

.tag-style {
  display: flex;
  gap: 10px;
}

.tag-style p {
  background-color: #c3def0;
  border: 1px solid #c3def0;
  padding: 3px 8px;
  border-radius: 8px;
}
</style>