<template>
  <div class="py-5 mb-large md:mb-larger not-prose">
    <Head>
      <Title>Blog de CasaConJardin - Consejos, Tendencias y Novedades para tu Casa con Jardín | CasaConJardin.com</Title>
      <Meta
        name="description"
        content="Explora nuestro Blog de CasaConJardin y mantente actualizado con las últimas tendencias, consejos de jardinería y decoración de exteriores para tu casa con jardín"
      />
      <Meta name="og:image" content="/img/casa-con-jardin.jpeg" />
    </Head>
    <h1 class="mb-5 text-2xl text-center uppercase md:text-4xl text-primary">
      Blog de CasaConJardin
    </h1>
    <ContentList :query="query" v-slot="{ list }">
      <div class="grid gap-5 md:grid-cols-3">
        <nuxt-link :to="casa._path" v-for="(casa, i) in list" :key="i">
          <div class="w-full shadow-xl max-w-larger card bg-base-200">
            <div class="relative card-body">
              <!-- <div class="badge badge-outline">{{ casa.etiquetas[0] }}</div> -->
              <p class="h-16">{{ casa.title }}</p>
              <div
                v-if="i < 2"
                class="absolute px-1 py-0 text-xs text-secondary-content bg-secondary bottom-5 right-5"
              >
                nuevo!!
              </div>
            </div>
            <figure>
              <img
                class="w-full content-cover"
                :src="casa.image"
                :alt="casa.title"
              />
            </figure>
          </div>
        </nuxt-link>
      </div>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/blog",
  limit: 10,
  sort: [{ date: -1 }],
};
</script>

<style scoped></style>
