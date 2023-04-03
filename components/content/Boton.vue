<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

// <button class="btn btn-lg">Large</button>
// <button class="btn">Normal</button>
// <button class="btn btn-sm">Small</button>
// <button class="btn btn-xs">Tiny</button>

const button = cva("button", {
  variants: {
    intent: {
      default: "btn",
      primary: "btn btn-primary",
      secondary: "btn btn-secondary",
      accent: "btn btn-accent",
      ghost: "btn btn-ghost",
      link: "btn btn-link",
    },
    size: {
      small: "btn-sm",
      medium: "btn",
      large: "btn-lg",
      xlarge: "btn-xl",
      xsmall: "btn-xs",
    },
    modifiers: {
      block: "btn-block",
      outline: "btn-outline",
      responsive: "btn-xs sm:btn-sm md:btn-md lg:btn-lg",
    },
  },
  compoundVariants: [
    { intent: "primary", size: "medium", class: "capitalize" },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

type ButtonProps = Required<VariantProps<typeof button>>;

defineProps<{
  intent?: ButtonProps["intent"];
  size?: ButtonProps["size"];
  modifiers?: ButtonProps["modifiers"];
}>();
</script>

<template>
  <button class="gap-2 not-prose" :class="button({ intent, size, modifiers })">
    <slot v-if="$slots.prefix" name="prefix" />
    <slot>Botón</slot>
    <slot v-if="$slots.suffix" name="suffix" />
  </button>
</template>
