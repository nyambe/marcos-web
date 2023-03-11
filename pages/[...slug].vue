<template>
  <main class="container mx-auto px-5">
    <ContentDoc v-slot="{ doc }">
      <pre>
        {{ doc }}
      </pre>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>
