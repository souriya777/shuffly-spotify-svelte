<template>
  <span class="checkbox">
    <label :for="checkboxUid">
      <input type="checkbox" :id="checkboxUid" :name="checkboxUid" checked />
      <CercleEmptySvg class="empty" />
      <CercleFullSvg class="full" />
      <slot></slot>
    </label>
  </span>
</template>

<script setup>
import { getCurrentInstance } from "vue";
import CercleEmptySvg from "../assets/svg/cercle-empty.svg";
import CercleFullSvg from "../assets/svg/cercle-full.svg";

const checkboxUid = getCurrentInstance().uid;
</script>

<style scoped>
.checkbox {
  margin: auto 0.4rem;
}
label {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
}

input[type="checkbox"] {
  display: none;
}
.full {
  display: none;
}
input[type="checkbox"]:checked ~ .empty {
  display: none;
}
input[type="checkbox"]:checked ~ .full {
  display: block;
}
</style>
