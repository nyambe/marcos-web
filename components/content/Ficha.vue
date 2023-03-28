<template>
	<div class="contenido not-prose">
		<div class="shadow-xl card lg:card-side bg-base-100">
  	<figure v-if="foto"><nuxt-img fit="cover" format="webp" sizes="sm:100vw md:400px lg:600px" :src="`/img/${foto}`" :alt="`${foto}`" /></figure>
		<div class="card-body lg:w-2/3">
			<h2 class="card-title"><ContentSlot :use="$slots.titulo" unwrap="p" /></h2>
			<p class="line-clamp-3">
				<ContentSlot :use="$slots.default" unwrap="p" />
			</p>
			
			<div class="justify-end card-actions">
			<nuxt-link v-if="$slots.boton" :to="`/${articulo}`" class="btn btn-primary">
			<ContentSlot :use="$slots.boton" unwrap="p" /> 
			</nuxt-link>
			</div>
		</div>
		</div>
	</div>
</template>
<script setup lang="ts">
defineProps({
  foto: {
	type: String,
	default: 'casas-con-jardin.jpg'
  },
	articulo:{
		type: String,
		default: 'blog/casas-felices'
	}
})
</script>