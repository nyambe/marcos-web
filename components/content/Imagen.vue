<template>
	<div class="w-full not-prose">
	 <figure class="w-full max-w-5xl mx-auto"><nuxt-img :class="style"  :src="src" :alt="alt" /></figure>
	</div>
</template>
<script setup lang="ts">
	defineProps({
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
		style: {
			type: String,
			required: false,
			default: '',
		},

	})


</script>