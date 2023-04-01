<template>
  <div class="w-full">
    jjj
    <h1>{{ contentQuery.length }}</h1>
    <pre>
		{{ contentQuery }} 
	</pre
    >
  </div>
</template>
<script setup lang="ts">
// .where({ etiquetas: { $icontains: "ven" } })
const contentQuery = await queryContent("galeria")
  .only(["title", "etiquetas", "image", "author", "date", "category", "_path"])
  .where({ etiquetas: { $eq: "" } })
  .find();
</script>
