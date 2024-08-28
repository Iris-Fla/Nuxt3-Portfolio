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
</script>

<template>
  <Container padding="10px">
    <div v-if="status === 'pending' || status ==='idle'" class="loading-indicator">
      <p>読み込み中...!</p>
    </div>
    <Row v-else>
      <Col col="12 xl-3 lg-4 md-6" v-for="article in blog.contents" :key="article.id">
        <NuxtLink :to="`/${article.id}`" style="text-decoration: none; color: inherit;">
          <Card margin="b-3" :to="`/${article.id}`" class="card-style">
            <NuxtImg :src="`${article.thumbnail.url}?fm=webp`" :alt="article.title" fit="cover" format="webp" placeholder quality="80"/>
            <CardBody style="padding-top: 7px;">
              <CardText><SkillIcons :useSkill= "$formatTags(article.tags)" /></CardText>
              <CardTitle margin="b-3">{{ article.title }}</CardTitle>
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
  color: #000000;
  background-color: #f4f2ed;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 5px #bdbdbd;
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

.loading-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2em;
}
</style>
