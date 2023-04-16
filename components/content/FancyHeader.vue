<template>
  <div class="min-h-screen hero not-prose fancy-header">
    <div class="bg-opacity-50 hero-overlay"></div>
    <div class="text-center hero-content text-neutral-content">
    
      <div class="py-20 max-w-7xl">
        <h1 class="py-2 text-4xl font-bold md:text-7xl ">
          <ContentSlot :use="$slots.titulo" unwrap="p" />
        </h1>

        <h2 class="p-2 mb-5 text-3xl lg:text-4xl md:mb-10">
          <ContentSlot :use="$slots.subtitulo" unwrap="p" />
        </h2>
        <p class="w-full max-w-5xl mb-10 text-lg text-center md:text-2xl md:block md:mb-24">
          <ContentSlot :use="$slots.texto" unwrap="p" />
        </p>
        <!-- <button v-if="$slots.boton" class="btn btn-primary">
          <ContentSlot :use="$slots.boton" unwrap="p" />
        </button> -->
        <div class="justify-around w-full md:flex">
          <slot name="accion" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
