<script>
  import { back } from '../stores/stores';
  import { superFlyLeft, superFlyRight } from '../utils/transitionSuperFly';

  export let refresh = '';

  const SPEED = 400;
  let width;
</script>

<svelte:window bind:innerWidth={width} />

<div class="screen">
  {#key refresh}
    {#if $back}
      <div
        class="transitionElt"
        in:superFlyRight={{ x: width, duration: SPEED }}
        out:superFlyRight={{ x: width, duration: SPEED, out: true }}
      >
        <slot />
      </div>
    {:else}
      <div
        class="transitionElt"
        in:superFlyLeft={{ x: width, duration: SPEED }}
        out:superFlyLeft={{ x: width, duration: SPEED, out: true }}
      >
        <slot />
      </div>
    {/if}
  {/key}
</div>

<style>
  .screen {
    display: grid;
    height: 100%;
    background-color: var(--color-background);
    color: var(--color-text);
    overflow: hidden;
  }
  /* FIXME TRANSITION */
  :global(.screen .transitionElt) {
    grid-area: 1/1/2/2;
  }
  :global(.screen > .transitionElt > div) {
    height: 100%;
  }
</style>
