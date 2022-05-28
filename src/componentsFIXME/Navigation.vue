<template>
  <nav>
    <!-- FIXME -->
    <NavigationBtn label="Select" :to="RoutePath.SELECT"
      ><Select
    /></NavigationBtn>
    <NavigationBtn label="Shuffle" :to="RoutePath.SHUFFLE"
      ><ShuffleSvg
    /></NavigationBtn>
    <NavigationBtn label="Queue" :to="RoutePath.QUEUE"
      ><QueueSvg
    /></NavigationBtn>
  </nav>
</template>
<script setup>
import Select from "../assets/svg/select.svg";
import ShuffleSvg from "../assets/svg/shuffle.svg";
import QueueSvg from "../assets/svg/queue.svg";
import RoutePath from "../utils/RoutePath";

import NavigationBtn from "./NavigationBtn.vue";
</script>
<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
