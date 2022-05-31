<template>
  <div class="browser" @scroll="onScroll">
    count: {{ state.count }}
    <slot></slot>
  </div>
</template>
<script setup>
import { defineProps, reactive } from "vue";

const state = { count: 0 };

function onScroll(e) {
  const div = e.target;
  console.log("onScroll");
  if (div.offsetHeight + div.scrollTop >= div.scrollHeight) {
    // FIXME
    // this.$bus.$emit("scroll-end");
  }
}
</script>
<style>
.browser {
  background-color: var(--color-background-2);
  overflow: scroll;
}
</style>
