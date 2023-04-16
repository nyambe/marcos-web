<template>
  <Disclosure class="w-full" v-slot="{ open }" as="div">
    <div class="sticky top-0 z-50 bg-opacity-60 bg-base-100 text-content navbar not-prose">
      <div class="flex-none"></div>
      <div class="flex-1">
        <nuxt-link
          to="/"
          class="text-xl font-bold normal-case md:text-2xl btn btn-ghost"
          >MKL Music
        </nuxt-link>
      </div>
      <div v-if="cabecera" class="md:flex-none">
        <ul
          v-if="cabecera.children"
          class="hidden px-1 text-sm menu menu-horizontal md:flex"
        >
          <li v-for="item in cabecera.children">
            <nuxt-link :to="`/${item.destino}`">{{ item.texto }} </nuxt-link>
          </li>
        </ul>

        <DisclosureButton class="btn btn-ghost ui-open:btn-primary md:hidden">
          <Icon
            :name="`${
              !open ? 'heroicons-solid:bars-3' : 'heroicons-solid:x-mark'
            }`"
          />
        </DisclosureButton>
      </div>
    </div>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <DisclosurePanel>
        <div v-if="cabecera" class="pt-2 pb-3 space-y-1">
          <DisclosureButton
            @click="navAction(item)"
            :class="[
              item.destino === $route.name
                ? 'bg-primary-focus text-primary-content'
                : 'bg-base-200 text-base-content',
            ]"
            class="w-full py-2 cursor-pointer hover:bg-primary hover:text-primary-content"
            v-for="(item, i) in cabecera.children"
            :key="i"
          >
            {{ item.texto }}
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

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

const isOpen = ref(false);
const ruta = useRouter();

function navAction(item: Navegacion) {
  if (item.tipo === "ancla" && item.destino) {
    ruta.push(`/${item.destino}`);
    return item.destino;
  } else if (item.tipo === "enlace") {
    return item.texto;
  }
}
// const nav = navigation.value.find(item => item._path === "/navegacion");
</script>

<style scoped></style>
