<script context="module">
  // FIXME mutualize with other __layout.svelte?
  export const load = async ({ page }) => ({
    props: {
      key: page.path.replace('/connected/', ''),
    },
  });
</script>

<script>
  import Player from '~/components/Player.svelte';
  import Menu from '~/components/Menu.svelte';

  export let key;
</script>

<div class="connected">
  <div class="content">
    <h1>{key}</h1>
    <slot />
  </div>
  <div class="layout-player">
    <Player />
  </div>
  <div class="layout-menu">
    <Menu />
  </div>
</div>

<style>
  h1 {
    text-transform: capitalize;
  }
  .connected {
    --player-height: 5.4rem;
    position: relative;
    display: grid;
    grid-template-rows: calc(100vh - var(--player-height)) var(--player-height);
  }
  .layout-player {
    background-color: lawngreen;
    position: absolute;
    bottom: calc(var(--player-height) + 0.5rem);
    width: 100%;
  }
  .layout-menu {
    background-color: peru;
  }
</style>
