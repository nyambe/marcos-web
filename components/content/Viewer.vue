<template>
	<!-- <img src="/img/realistic_gardens_full_of_beautiful_flowers_and_ho.jpeg" alt="imagen"> -->
  <div ref="viewer" id="viewer" class="w-full h-screen bg-black"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Viewer, ViewerConfig  } from '@photo-sphere-viewer/core';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin'

const viewer = ref<HTMLDivElement | null>(null);

// currentImage random between 0 and 5
const currentImage = ref(Math.floor(Math.random() * 4))

const animatedValues = {
    pitch: { start: -Math.PI / 2, end: 0.2 },
    yaw: { start: Math.PI, end: 0 },
    zoom: { start: 60, end: 50 },
    fisheye: { start: 1, end: 0 },
};




const imagenes = ['/img/realistic_gardens_full_of_beautiful_flowers_and_ho.jpeg', '/img/scenic_a_house_with_a_garden_full_of_beautiful_ros.jpeg', '/img/interior_views_a_house_with_a_garden_full_of_beaut.jpeg','/img/realistic_a_house_with_a_garden_full_of_beautiful_.jpeg', '/img/realistic_gardens_full_of_beautiful_flowers_and_ho3.jpeg' ]

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
