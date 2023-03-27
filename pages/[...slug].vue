<template>
  <main
    data-theme="garden"
    class="mx-auto prose lg:prose-2xl scroll-smooth md:scroll-auto snap-both prose-a:no-underline max-w-none"
  >
    <div class="mx-2 md:mx-small lg:mx-medium">
       <ContentDoc  v-slot="{ doc }">
      <ContentRenderer :value="doc" />
      <!-- <pre>
        {{ doc }}
      </pre> -->
    </ContentDoc>
    </div>
  </main>
</template>
