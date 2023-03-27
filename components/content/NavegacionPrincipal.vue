<template>
  <div class="sticky top-0 z-50 bg-base-100 navbar not-prose">
    <div class="flex-none"></div>
    <div class="flex-1">
      <nuxt-link to="/" class="text-xl font-bold normal-case md:text-2xl btn btn-ghost"
        >CASA CON JARDIN
      </nuxt-link>
    </div>
    <div v-if="cabecera" class="flex-none">
      <ul v-if="cabecera.children" class="hidden px-1 text-sm menu menu-horizontal md:flex">
        <li v-for="item in cabecera.children">
          <nuxt-link :to="`/${item.destino}`">{{ item.texto }} </nuxt-link>
        </li>
      </ul>
      <button class="btn btn-square btn-ghost md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Navegacion {
  title: string;
  _path: string;
  tipo?: string;
  texto?: string;
  destino?: string;
  children?: Navegacion[];
}
const { navigation, page, surround, globals, toc } = useContent();
const menu = ref<Navegacion[]>();

menu.value = navigation.value as Navegacion[];

const nav = menu.value.find(item => item._path === "/navegacion");
const cabecera = nav?.children?.find(
  item => item._path === "/navegacion/cabecera"
);

// const nav = navigation.value.find(item => item._path === "/navegacion");
</script>

<style scoped></style>
