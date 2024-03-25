<template>
  <ul>
    <li v-for="blog in blogs?.contents" :key="blog.id">
      <NuxtLink :to="`/${blog.id}`">
        <img
          :src="blog.eyecatch.url"
          :width="blog.eyecatch.width"
          :height="blog.eyecatch.height"
          alt=""
        />
        <span>
          {{ blog.title }}
        </span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { MicroCMSImage } from 'microcms-js-sdk';

type Blog = {
  title: string;
  eyecatch: MicroCMSImage;
};

const { data: blogs } = await useMicroCMSGetList<Blog>({
  endpoint: 'blogs',
  queries: { fields: ['id', 'title', 'eyecatch'] },
});
</script>