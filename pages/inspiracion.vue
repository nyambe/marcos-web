<template>
  <div class="py-5 not-prose">
    <h1 class="mb-5 text-4xl text-center uppercase text-primary">
      Inspiración
    </h1>
    <ContentList :query="query" v-slot="{ list }">
      <div class="grid gap-5 md:grid-cols-3">
        <nuxt-link :to="casa._path" v-for="(casa, i) in list" :key="i">
          <div class="w-full shadow-xl max-w-larger card bg-base-200">
 
            <figure>
              <img
                class="w-full content-cover"
                :src="casa.image"
                :alt="casa.title"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title"> {{ casa.description }}</h2>
              <p class="h-16">{{ casa.title }}</p>
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
  limit: 10,
  sort: [{ date: -1 }],
};
</script>

<style scoped></style>
