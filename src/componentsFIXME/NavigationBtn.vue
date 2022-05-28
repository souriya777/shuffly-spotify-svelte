<template>
  <router-link :to="to" class="routerLink">
    <div class="navigation-btn">
      <slot></slot>
      <label>{{ label }}</label>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  label: String,
  to: String,
});
</script>

<style scoped>
.navigation-btn {
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.1rem;
}
</style>
