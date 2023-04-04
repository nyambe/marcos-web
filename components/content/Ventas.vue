<template>
  <div class="w-full md:p-normal">
    <h3 class="text-primary">Casa con jardin: Se vende</h3>

    <ContentList :query="query" v-slot="{ list }">
      <div
        class="p-2 space-x-2 md:p-4 md:space-x-4 carousel carousel-center bg-neutral rounded-box"
      >
        <nuxt-link
          class="carousel-item"
          :to="casa._path"
          v-for="(casa, i) in list"
          :key="i"
        >
          <div class="w-64 shadow-xl md:w-larger card bg-base-200">
            <div class="relative card-body">
              <div class="badge badge-primary">{{ casa.etiquetas[0] }}</div>
              <p class="text-sm">{{ casa.title }}</p>
              <div
                v-if="i < 2"
                class="absolute text-base font-semibold text-right underline bottom-4 text-accent-focus"
              >
                nuevo!!
              </div>
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
  path: "/youtube",
  limit: 10,
  sort: [{ date: -1 }],
};
</script>

<style scoped></style>
