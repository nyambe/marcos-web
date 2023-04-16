<template>
  <button @click="navigate" class="gap-2 not-prose" :class="button({ intent, size, modifiers })">
    <slot v-if="$slots.prefix" name="prefix" />
    <slot>Botón</slot>
    <slot v-if="$slots.suffix" name="suffix" />
  </button>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

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
    { intent: "primary", size: "xsmall", class: "uppercase" },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

type ButtonProps = Required<VariantProps<typeof button>>;

const props = defineProps<{
  intent?: ButtonProps["intent"];
  size?: ButtonProps["size"];
  modifiers?: ButtonProps["modifiers"];
  to?: string;
  target?: string;
}>();

const router = useRouter();

const navigate = () => {
  if (props.to && isExternalLink(props.to)) {
    if (props.target === "_blank") {
      window.open(props.to, "_blank", "noopener noreferrer");
    } else {
      
      if (process.client && props.to) {
        window.location.href = props.to;
      }
    }
  } else if (props.to && isValidRoute(props.to)) {
    if (props.to) {
      router.push(props.to);
    }
   
  } else {
    console.warn("Invalid route:", props.to);
  }
};


const isExternalLink = (link: string) => {
  return /^https?:\/\//.test(link);
};

const isValidRoute = (route: string) => {
  try {
    router.resolve(route);
    return true;
  } catch (error) {
    return false;
  }
};
</script>

