<template>
  <main
    data-theme="garden"
    class="mx-auto prose lg:prose-2xl scroll-smooth md:scroll-auto snap-both prose-a:no-underline max-w-none"
  >
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer :value="doc" />
      <!-- <pre>
        {{ doc }}
      </pre> -->
    </ContentDoc>
  </main>
</template>
