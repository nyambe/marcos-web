<template>
  <div
    class="min-h-screen hero"
    style="background-image: url(/img/marcos.jpeg)"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>

        <h2 class="fancy-header">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </h2>
        <p class="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
