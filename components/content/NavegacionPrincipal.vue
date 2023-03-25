<template>
  <div class="navbar bg-base-100">
    <div class="flex-none"></div>
    <div class="flex-1">
      <router-link to="/" class="text-xl normal-case btn btn-ghost"
        >MKL Music
      </router-link>
    </div>
    <div v-if="cabecera" class="flex-none">
      <ul v-if="cabecera.children" class="px-1 menu menu-horizontal">
        <li v-for="item in cabecera.children">
          <a>{{ item.texto }} </a>
        </li>
      </ul>
      <button class="btn btn-square btn-ghost">
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
