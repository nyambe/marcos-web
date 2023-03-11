<template>
  <section
    class="bg-secondary-200 text-secondary-content hover:bg-secondary-focus p-5 w-full"
  >
    <h2>Estoy en el componente</h2>
    <h1 class="text-4xl"><slot /></h1>
    <slot name="description" />
  </section>
</template>
