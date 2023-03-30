<template>
	<div class="w-full md:px-normal">
		<h3 v-if="titulo" class="text-primary">{{ titulo }}</h3>
		<div class="grid gap-4 md:grid-cols-3">
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