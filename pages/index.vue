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
      <TransitionGroup name="fade" tag="div">
        <div v-for="article in data.contents" :key="article.id">
          <Col>
            <Alert theme="light">
              <Row>
                <Col>
                  <BH4
                    ><NuxtLink :to="`/${article.id}`">{{
                      article.title
                    }}</NuxtLink></BH4
                  >
                  <br />
                </Col>
                <Col><img :src="article.thumbnail.url" :width="300" :height="auto"/></Col>
              </Row>
            </Alert>
          </Col>
        </div>
      </TransitionGroup>
    </Row>
  </Container>
</template>
