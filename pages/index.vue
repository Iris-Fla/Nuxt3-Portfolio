<script setup>
const $config = useRuntimeConfig();

const { data } = await useFetch("/blog", {
  baseURL: $config.public.baseURL,
  headers: {
    "X-MICROCMS-API-KEY": $config.public.apiKey,
  },
});
</script>
<template>
  <Container>
    <Row>
      <Col col="12 sm-4" v-for="article in data.contents" :key="article.id">
      <NuxtLink :to="`/${article.id}`" style="text-decoration: none; color: inherit;">
        <Card margin="b-3" :to="`/${article.id}`" class="card-style">
          <CardImgTop :src="article.thumbnail.url" alt="Article image" />
          <CardBody>
            <CardTitle margin="b-3">{{ article.title }}</CardTitle>
            <div class="tag-style">
              <p v-for="tag in article.tags" :key="tag.id">
                {{ tag.id }}
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
  color: #755d5d;
  background-color: #fbf5f5;
  transition: all 0.3s ease-in-out;
}

.card-style:hover {
  transform: scale(1.05);
}

.tag-style {
  display: flex;
  gap: 10px;
}
.tag-style p {
  border: 1px solid #755d5d;
  padding: 3px 8px; 
  border-radius: 8px;}
</style>