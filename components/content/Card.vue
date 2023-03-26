<template>
<div class="shadow-xl card bg-base-100 image-full not-prose">
  <figure v-if="foto"><img :src="`/img/${foto}`" :alt="`${foto}`" /></figure>
  <div class="card-body">
    <h2 class="font-bold card-title"> <ContentSlot :use="$slots.titulo" unwrap="p" /> </h2>
   <slot />
    <div v-if="$slots.boton" class="justify-end card-actions">
      <button class="btn btn-primary"> <ContentSlot :use="$slots.boton" unwrap="p" />    </button>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
defineProps({
  foto: {
	type: String,
	default: 'casas-con-jardin.jpg'
  }
})
</script>