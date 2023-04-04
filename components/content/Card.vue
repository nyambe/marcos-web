<template>
  <div class="shadow-xl card bg-base-100 image-full not-prose">
    <figure v-if="foto">
      <nuxt-img :src="`/img/${foto}`" :alt="`${foto}`" />
    </figure>
    <div class="card-body">
      <h2 class="font-bold card-title">
        <ContentSlot :use="$slots.titulo" unwrap="p" />
      </h2>
      <slot />
      <nuxt-link
        :to="enlace"
        v-if="$slots.boton"
        class="justify-end card-actions"
      >
        <button class="btn btn-primary">
          <ContentSlot :use="$slots.boton" unwrap="p" />
        </button>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  foto: {
    type: String,
    default: "casas-con-jardin.jpg",
  },
  enlace: {
    type: String,
    default: "/",
    required: false,
  },
});
</script>
