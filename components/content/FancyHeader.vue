<template>
  <div
    class="min-h-fit hero not-prose fancy-header"
    style="background-image: url(/img/casa-con-jardin.webp)"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center hero-content text-neutral-content">
    
      <div class="py-20 max-w-7xl">
        <h1 class="py-2 text-3xl font-bold md:text-7xl ">
          <ContentSlot :use="$slots.titulo" unwrap="p" />
        </h1>

        <h2 class="p-2 text-3xl lg:text-4xl md:pb-10">
          <ContentSlot :use="$slots.subtitulo" unwrap="p" />
        </h2>
        <p class="w-full max-w-5xl mb-10 text-2xl text-justify md:mb-24">
          <ContentSlot :use="$slots.texto" unwrap="p" />
        </p>
        <button v-if="$slots.boton" class="btn btn-primary">
          <ContentSlot :use="$slots.boton" unwrap="p" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
