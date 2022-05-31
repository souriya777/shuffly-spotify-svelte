<template>
  <CrossSvg class="cross" />
  <span>setting panel TODO</span>
  <!-- <div class="settings-panel">
    <div class="settings-entry">connexion</div>
  </div> -->
</template>

<script setup>
import CrossSvg from "../assets/svg/cross.svg";
</script>

<style scoped>
.settings-panel {
  position: absolute;
  padding: 6.4rem 0 4rem 4rem;

  font-size: 2.4rem;
  letter-spacing: -0.096rem;
  line-height: 1.75rem;
  color: var(--color-text);
  background-color: var(--color-background);
}
.settings-entry {
  text-transform: capitalize;
  font-weight: 700;
}

.cross {
  position: absolute;
  z-index: var(--z-index-max);
  top: 1rem;
  right: 1.5rem;
  fill: var(--color-text);
}
</style>
