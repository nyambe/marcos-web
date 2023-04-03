<template>
  <main
    data-theme="garden"
    class="mx-auto prose lg:prose-2xl scroll-smooth md:scroll-auto snap-both prose-a:no-underline max-w-none"
  >
    <div class="mx-2 md:mx-small lg:mx-medium">
      <ContentDoc v-slot="{ doc }">
        <ContentRenderer :value="doc" />
        <!-- <pre>
        {{ doc }}
      </pre> -->
      </ContentDoc>
      <div
        v-if="type"
        class="flex items-center justify-between w-full text-xs underline md:text-sm my-large"
      >
        <NuxtLink v-if="prev" :to="prev._path">
          <Icon name="uil:angle-left" /> {{ prev.title }}</NuxtLink
        >
        <NuxtLink v-if="next" :to="next._path"
          >{{ next.title }} <Icon name="uil:angle-right"
        /></NuxtLink>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
const { prev, next, type, page: test } = useContent();


// const [prev, next] = await queryContent()
//   .only(['_path', 'title'])
//   .sort({ date: 1})
//   .where({ isArchived: false })
//   .findSurround()
</script>
