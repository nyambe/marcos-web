<template>
	<!-- <img src="/img/realistic_gardens_full_of_beautiful_flowers_and_ho.jpeg" alt="imagen"> -->
  <div ref="viewer" id="viewer" class="w-full h-screen bg-black"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Viewer, ViewerOptions } from 'photo-sphere-viewer';

const viewer = ref<HTMLDivElement | null>(null);

// currentImage random between 0 and 5
const currentImage = ref(Math.floor(Math.random() * 4))

const animatedValues = {
    pitch: { start: -Math.PI / 2, end: 0.2 },
    yaw: { start: Math.PI, end: 0 },
    zoom: { start: 0, end: 50 },
    fisheye: { start: 2, end: 0 },
};




const imagenes = ['/img/realistic_gardens_full_of_beautiful_flowers_and_ho.jpeg', '/img/scenic_a_house_with_a_garden_full_of_beautiful_ros.jpeg', '/img/interior_views_a_house_with_a_garden_full_of_beaut.jpeg','/img/realistic_a_house_with_a_garden_full_of_beautiful_.jpeg', '/img/realistic_gardens_full_of_beautiful_flowers_and_ho3.jpeg' ]

onMounted(() => {
  if (viewer.value) {
    const options: ViewerOptions = {
      container: viewer.value,
      panorama: imagenes[currentImage.value],
      navbar: [
        'autorotate',
        'zoom',
        'fullscreen',
      ],
      autorotateSpeed: '1rpm',
      touchmoveTwoFingers: true,

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
