<template>
	<div class="navbar bg-base-100">
	<div class="flex-1">
		<router-link class="text-xl uppercase btn btn-ghost" to="/">
		<ContentSlot :use="$slots.default" unwrap="p" />
		</router-link>
	</div>
	<div class="flex-none">
		<ul class="px-1 menu menu-horizontal">
		<li v-for="(item, i) in lista "><a>{{ item }} </a></li>
		</ul>
	</div>
	<slot name="titulo" />
	</div>
	
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Default title'
  },
  description: {
    type: String,
    default: 'Default description'
  },
  icon: {
    type: String,
    default: 'IconMarkdown'
  },
  lista : {
	type: Array,
	default: ['uno', 'dos', 'tres']
  }
})

</script>

<style scoped>

</style>