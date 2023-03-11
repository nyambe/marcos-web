<template>
  <div class="">
    <ElDestacado />

    <!-- <ContentDoc /> -->
    <pre>
    {{ navigation }}
    </pre>
  </div>
</template>

<script setup lang="ts">
const { navigation, page, surround, globals } = useContent();
console.log(page.value);
</script>
<style scoped></style>
