<template>
  <div
    class="min-h-screen hero not-prose"
    style="background-image: url(/img/marcos.jpeg)"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-6xl">
        <h1 class="text-6xl font-bold">
          <ContentSlot :use="$slots.titulo" unwrap="p" />
        </h1>

        <h2 class="pb-2 text-4xl md:pb-10">
          <ContentSlot :use="$slots.subtitulo" unwrap="p" />
        </h2>
        <p class="w-full max-w-3xl mb-10 text-2xl text-justify md:mb-24">
          <ContentSlot :use="$slots.texto" unwrap="p" />
        </p>
        <button class="btn btn-primary">
          <ContentSlot :use="$slots.boton" unwrap="p" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
