<template>
  <div class="select-view">
    <h1>select playlist</h1>
    <input type="text" placeholder="Find in playlists" />
    <ul>
      <li>
        <Checkbox>
          <img alt="TODO dynamize" src="https://via.placeholder.com/41" />
          Bachata ❤️
        </Checkbox>
      </li>
      <li>
        <Checkbox>
          <img alt="TODO dynamize" src="https://via.placeholder.com/41" /> Kiz
          ❤️
        </Checkbox>
      </li>
      <li>
        <Checkbox>
          <img alt="TODO dynamize" src="https://via.placeholder.com/41" /> Salsa
          ❤️
        </Checkbox>
      </li>
    </ul>
    <Hr />
    <h2>Other playlists</h2>
    <ul>
      <li>
        <Checkbox>
          <img alt="TODO dynamize" src="https://via.placeholder.com/41" />
          Bachata ❤️
        </Checkbox>
      </li>
      <li>
        <Checkbox>
          <img alt="TODO dynamize" src="https://via.placeholder.com/41" /> Kiz
          ❤️
        </Checkbox>
      </li>
      <li>
        <Checkbox>
          <img alt="TODO dynamize" src="https://via.placeholder.com/41" /> Salsa
          ❤️
        </Checkbox>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Hr from "../components/Hr.vue";
import Checkbox from "../components/Checkbox.vue";
</script>

<style scoped>
/* FIXME */
li {
  display: flex;
  align-items: center;
  margin: 1rem auto;

  background-color: springgreen;
}

.select-view {
  height: 100%;
  background-color: plum;
}

h1 {
  font-weight: 700;
  text-transform: capitalize;
}
</style>
