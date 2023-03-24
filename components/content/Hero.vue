<template>
  <section
    class="w-full p-5 bg-secondary-200 text-secondary-content hover:bg-secondary-focus"
  >
    <h2><ContentSlot :use="$slots.default" unwrap="p" /></h2>
    <h1 class="text-4xl"><slot /></h1>
    <slot name="description" />
  </section>
</template>
