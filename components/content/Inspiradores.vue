<template>
	<div class="w-full md:p-normal">

	<h3 class="text-primary">Inspiraciones</h3>

    <ContentList :query="query" v-slot="{ list }">
      <div class="p-2 space-x-2 md:p-4 md:space-x-4 carousel carousel-center bg-neutral rounded-box">
        <nuxt-link class="carousel-item" :to="casa._path" v-for="(casa, i) in list" :key="i">
          <div class="w-64 shadow-xl md:w-larger card bg-secondary">
            <div class="card-body text-secondary-content">
              <div v-if="casa.author" class="badge badge-primary">{{ casa.author }} </div>
              <p class="text-sm">{{ casa.title }}</p>
            </div>

          </div>
        </nuxt-link>
      </div>
    </ContentList>
	</div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/galeria",
  limit: 15,
  sort: [{ date: 1 }],
};

</script>

<style scoped>

</style>