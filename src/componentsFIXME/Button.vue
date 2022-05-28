<template>
  <button class="button" :class="buttonClass" @click="navigateTo">
    log in
  </button>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import ButtonStyle from "../utils/ButtonStyle";

const router = useRouter();

const props = defineProps({
  variant: {
    type: String,
    default: ButtonStyle.OUTLINED,
  },
  to: {
    type: String,
  },
});

const buttonClass = computed(() => {
  return props.variant;
});

function navigateTo() {
  router.push(props.to);
}
</script>

<style scoped>
.button {
  display: block;
  width: 86%;
  max-width: 45rem;
  padding: 1rem;
  border-radius: 50rem;
  font-family: "spotify-circular-bold";
  font-size: 1.4rem;
  text-transform: uppercase;
}
.outlined {
  border: 0.05rem solid var(--color-button-outlined);
}
</style>
