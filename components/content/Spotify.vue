<template>
	<div  class="w-full bg-content">
		<iframe v-if="track" style="border-radius:12px" :src="`https://open.spotify.com/embed/track/${track}?utm_source=generator`" width="100%" height="352" frameBorder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
		<iframe v-else-if="album" style="border-radius:12px" :src="`https://open.spotify.com/embed/album/${album}?utm_source=generato`" width="100%" height="352" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
	</div>
</template>

<script setup lang="ts">
defineProps({
	track: {
		type: String,
		required: false
	},
	album: {
		type: String,
		required: false
	},
})

</script>

<style scoped>

</style>