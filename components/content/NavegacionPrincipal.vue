<template>
  <div class="sticky top-0 z-50 bg-base-100 text-primary navbar not-prose">
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
        <div class="dropdown dropdown-end md:hidden">
        <Menu v-slot="{ open }" >
          <MenuButton class="group/menu btn btn-ghost ui-open:btn-primary"><Icon  :name="`${!open? 'heroicons-solid:bars-2': 'heroicons-solid:x-mark'}`" /></MenuButton>
          <MenuItems v-if="cabecera" class="p-2 rounded shadow dropdown-content menu bg-base-100 w-52">
            <MenuItem v-for="(item,i) in cabecera.children">
              <nuxt-link class="p-2 ui-active:bg-primary hover:bg-base-300"  :to="`/${item.destino}`">{{ item.texto }} </nuxt-link>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

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
