<template>
	<div class="relative">
		<img v-if="imagen" :src="imagen" alt="fondo" class="relative top-0 object-cover w-full h-screen" />

		<div class="absolute top-0 flex flex-col justify-center w-full h-screen not-prose">
          <slot></slot>
      </div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	imagen: {
		type: String,
		required: false,
	},
});

</script>

<style scoped>

</style>