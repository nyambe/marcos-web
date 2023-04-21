<template>
  <div
    class="w-full h-screen bg-center bg-no-repeat bg-cover"
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
      required: false,
      default: "/img/fondo_marcos.webp"
    },
  },
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
