<script setup lang="ts">

const { data: message } = await useFetch('/api/sample')

</script>
<template>
    <div>
        <h1 style="
        font-size:50px;
        text-align:center;
        margin:100px 0 auto;
        ">{{ message }}</h1>
    </div>
</template> 