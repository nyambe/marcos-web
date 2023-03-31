<template>
  <div class="py-5 mb-large md:mb-larger not-prose">
    <Head>
      <Title>Casas en venta</Title>
      <Meta name="description" content="Explora nuestra selección de casas con jardín excepcionales y encuentra la propiedad perfecta para ti y tu familia." />
      <Meta name="og:image" content="/img/casa-con-jardin.jpeg" />
    </Head>
    <h1 class="mb-5 text-4xl text-center uppercase text-primary">
      Casas en venta
    </h1>
    <ContentList :query="query" v-slot="{ list }">
      <div class="grid gap-5 md:grid-cols-3">
        <nuxt-link :to="casa._path" v-for="(casa, i) in list" :key="i">
          <div class="w-full shadow-xl max-w-larger card bg-base-200">
            <div class="card-body">
              <div class="badge badge-outline"> {{ casa.etiquetas[0] }} </div>
              <p class="h-16">{{ casa.title }}</p>
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
  path: "/youtube",
  limit: 10,
  sort: [{ date: -1 }],
};

</script>

<style scoped></style>
