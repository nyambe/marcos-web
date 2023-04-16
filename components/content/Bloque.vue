<template>
<div class="w-full">
	<h3 v-if="titulo" class="text-primary">{{ titulo }}</h3>
	<div class="flex flex-wrap justify-around w-full">
		<slot />
	</div>
</div>
</template>
<script setup lang="ts">
	defineProps({
		titulo: {
			type: String,
			required: false,
		}
	})
</script>