<template>
    <NuxtImg format="webp" :src="formatImageUrl" :alt="alt" loading="lazy" />
</template>
<script setup>

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    }
});

const formatImageUrl = computed(() => {
    return `${props.src}?fm=webp`;
});
</script>