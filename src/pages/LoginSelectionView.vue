<template>
  <div class="login-selection-view">
    <div class="top">
      <SpotifySvg class="logo" />
      <div class="marketing">Millions of songs.<br />Free on Spotify.</div>
    </div>
    <div class="bottom">
      <div class="button">
        <Button variant="outlined" :to="RoutePath.LOGIN" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SpotifySvg from "../assets/svg/spotify.svg";
import Button from "../components/Button.vue";
import ButtonStyle from "../utils/ButtonStyle";
import RoutePath from "../utils/RoutePath";
</script>

<style scoped>
.login-selection-view {
  height: 100%;
  background-color: var(--color-background);
  color: var(--color-text);
}
.top,
.bottom {
  height: 50%;
}
.top {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.bottom {
  padding-top: 5rem;
}

.logo {
  fill: var(--color-text);
}
.marketing {
  margin-top: 2.8rem;
  font-family: "spotify-circular-bold";
  font-size: 3.2rem;
  letter-spacing: -0.12rem;
}
.button {
  display: flex;
  justify-content: center;
}
</style>
