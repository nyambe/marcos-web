<template>
	<!-- <img src="/img/realistic_gardens_full_of_beautiful_flowers_and_ho.jpeg" alt="imagen"> -->
  <div class="relative">
    <div ref="viewer" id="viewer" class="w-full h-screen bg-black">
    </div>
      <div class="absolute top-0 flex flex-col justify-center w-full h-screen not-prose">
          <slot></slot>
      </div>
      <!-- <div class="w-full py-10">
        <figure v-for="foto in imagenes" :key="foto"><nuxt-img fit="cover" format="webp" sizes="sm:100vw md:1920px lg:6144px" :src="`${foto}`" :alt="`${foto}`" /></figure>
      </div> -->
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Viewer, ViewerConfig  } from '@photo-sphere-viewer/core';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin'

const viewer = ref<HTMLDivElement | null>(null);

const imagenes = [
    "/img/realistic_a_cabin_with_a_garden_full_of_beautiful_.webp",
    "/img/realistic_a_house_on_a_mountain_top_with_a_garden_ (1).webp",
    "/img/realistic_a_house_on_a_mountain_top_with_a_garden_.webp",
    "/img/realistic_a_house_with_a_garden_full_of_beautiful_ 2.webp",
    "/img/realistic_a_house_with_a_garden_full_of_beautiful_.webp",
    "/img/realistic_a_house_with_a_garden_on_a_island.webp",
    "/img/realistic_a_house_with_a_garden_on_a_tropical_beac.webp",
    "/img/realistic_gardens_full_of_beautiful_flowers_and_ho.webp",
    "/img/scenic_a_house_with_a_garden_full_of_beautiful_ros.webp",
    "/img/realistic_gardens_full_of_beautiful_flowers_and_ho3.webp",
    "/img/interior_views_a_house_with_a_garden_full_of_beaut.webp",
    "/img/interior_views_a_house_on_a_mountain_top_with_a_ga1.webp",
    "/img/interior_views_a_house_on_a_mountain_top_with_a_ga.webp",
]


// currentImage random between 0 and 5
const currentImage = ref(Math.floor(Math.random() * imagenes.length))

const animatedValues = {
    pitch: { start: -Math.PI / 2, end: 0.2 },
    yaw: { start: Math.PI, end: 0 },
    zoom: { start: 60, end: 50 },
    fisheye: { start: 1, end: 0 },
};

// const config: ViewerConfig = {
//     container: viewer.value,
//     panorama: '/img/realistic_gardens_full_of_beautiful_flowers_and_ho.webp',
//     plugins: [
//         [
//             AutorotatePlugin,
//             {
//                 speed: 0.5,
//                 animatedValues,
//             },
//         ],
//     ],
// };



onMounted(() => {
  if (viewer.value) {
    const options: ViewerConfig = {
      container: viewer.value,
      panorama: imagenes[currentImage.value],
      caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
      // defaultPitch: animatedValues.pitch.start,
      // defaultYaw: animatedValues.yaw.start,
      defaultZoomLvl: animatedValues.zoom.start,
      fisheye: animatedValues.fisheye.start,
      navbar: [
        'autorotate',
        'zoom',
        'fullscreen',
      ],
      touchmoveTwoFingers: true,
      plugins: [
        [
          AutorotatePlugin,
          {
            speed: 0,
          },
        ],
      ],


    };
    const sphereViewer = new Viewer(options);
  }
});
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/core/index.min.css';
/* @import 'https://cdn.jsdelivr.net/npm/three/build/three.min.js' */
/* Add your Tailwind CSS classes or custom styles here */
</style>
