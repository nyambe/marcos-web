<template>
  <div data-theme="luxury" class="w-full">
    <div ref="contenido" class="w-full ">
      <!-- <LaNavegacion class="w-full mx-auto max-w-7xl"  /> -->
      <!-- <NavegacionPrincipal /> -->
      <NuxtPage />
      
      <!-- <ElPie /> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { useFocus } from '@vueuse/core'

const ruta = useRoute();

console.log('rure', ruta.name)
const contenido = ref()
const { focused } = useFocus(contenido, { initialValue: true })

console.log('enfocado', focused.value);

watch(
  () => ruta.name,
  (slug) => {
    console.log('jpa', slug);

  }
);
</script>