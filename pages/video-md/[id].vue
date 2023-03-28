<template>
  <div>
    <pre>
---
title: {{ info.title }}
description: {{ info.title }} - {{ info.author_name }}
image: {{ info.thumbnail_url }}
alt: {{ info.title }}
width: {{ info.thumbnail_width }}
height: {{ info.thumbnail_height }}
youtube: {{ id }}
slug: {{ slugify(info.title) }}
lastmod: {{ new Date().toISOString() }}
date: {{ new Date().toISOString() }}	
draft: false
type: youtube
---

## {{ info.title }}

:youtube{ id="{{ id }}" }

</pre
    >
  </div>
</template>

<script setup lang="ts">
import { IfBranchNode } from "@vue/compiler-core";

const { id } = useRoute().params;
interface InfoYoutubeVideo {
  url: string;
  version: string;
  thumbnail_height: number;
  title: string;
  thumbnail_url: string;
  author_name: string;
  author_url: string;
  html: string;
  height: number;
  type: string;
  provider_url: string;
  provider_name: string;
  thumbnail_width: number;
  width: number;
}

const { data } = await useFetch(
  `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`
);

const info = computed(() => {
  return JSON.parse(data.value as string) as InfoYoutubeVideo;
});

const slugify = (text: string) => {
  return text
    .toString()
    .normalize("NFD") // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};
</script>

<style scoped></style>
