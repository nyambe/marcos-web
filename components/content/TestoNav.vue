<template>
  <div class="dropdown">
    <Menu v-slot="{ open }">
      <MenuButton class="group/menu btn btn-ghost ui-open:btn-primary"
        ><Icon
          :name="`${
            !open ? 'heroicons-solid:bars-2' : 'heroicons-solid:x-mark'
          }`"
      /></MenuButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          v-if="cabecera"
          class="p-2 rounded shadow dropdown-content menu bg-base-100 w-52"
        >
          <MenuItem v-for="(item, i) in cabecera.children">
            <nuxt-link
              class="p-2 ui-active:bg-primary hover:bg-base-300"
              :to="`/${item.destino}`"
              >{{ item.texto }}
            </nuxt-link>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
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
</script>
