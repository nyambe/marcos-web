<template>
  <div class="w-full max-w-6xl mx-auto">
    <div style="position: relative; padding-bottom: 56.25%; height: 0">
      <iframe
        :src="`https://www.youtube.com/embed/${id}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
      ></iframe>
    </div>
    <div v-if="alt" class="w-full p-1 text-xs text-center bg-base-200">
      {{ alt }}
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
  },
});
</script>
