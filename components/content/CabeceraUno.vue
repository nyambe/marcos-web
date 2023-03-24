<template>
  <div class="not-prose">
    <div class="min-h-screen hero bg-base-200">
      <div class="flex-col hero-content lg:flex-row">
        <img src="/img/spider.jpeg" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold"><slot name="titulo" /></h1>
          <p class="py-6"><slot name="texto" /></p>
          <button class="btn btn-primary"><slot name="boton" /></button>
        </div>
        <pre>
		{{ $slots }}
		</pre
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
