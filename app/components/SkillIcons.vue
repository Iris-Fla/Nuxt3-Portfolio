<template>
  <div v-if="hasSkills" class="skill-icons">
    <img :src="iconUrl" :alt="altText"/>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  useSkill: {
    type: String,
    default: "",
  },
});

const hasSkills = computed(() => {
  return props.useSkill.trim() !== "";
});

const iconUrl = computed(() => {
  return `https://skillicons.dev/icons?i=${props.useSkill}&theme=light`;
});

const altText = computed(() => {
  return `技術スタック: ${props.useSkill}`;
});
</script>

<style scoped>
.skill-icons {
  display: inline-block;
}
</style>
