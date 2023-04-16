<template>
  <div
    class="h-screen bg-center bg-cover"
    :style="`background-image: url(${src})`"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "BackgroundImage",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
