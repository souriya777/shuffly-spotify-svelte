<script context="module">
  const SPEED = 40; // px per second
  const LETTER_PX = 5.8;
  const ANIMATION_DELAY_MS = 2000;
</script>

<script>
  import { onMount } from 'svelte';
  
  export let title, artists;

  $: fullTitle = `${title} • ${artists}`;
  let clientWidth;
  let visible = false;

  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, ANIMATION_DELAY_MS);
  });

  function slideTitle(node) {
    const distancePx = fullTitle.length * LETTER_PX;
    const duration = distancePx / SPEED;

    let offset = 0;
    if (clientWidth < distancePx) {
      offset = distancePx - clientWidth;
      const rules = `
      @keyframes translateTitle {
        from {
          transform: translateX(0%);
        }
        to {
          transform: translateX(-${offset}px);
        }
      }
      `;
      const style = document.createElement('style');
      document.head.appendChild(style);
      style.sheet.insertRule(rules);
      node.style.animation = `translateTitle linear ${duration}s infinite alternate`;
    }
  }
</script>

<div class="info">
  <div class="slider" bind:clientWidth>
    {#if visible}
      <div class="title" transition:slideTitle>
        <span class="white">{title} &bull; </span><span class="grey">{artists}</span>
      </div>
    {:else}
      <div class="title">
        <span class="white">{title} &bull; </span><span class="grey">{artists}</span>
      </div>
    {/if}
  </div>
</div>

<style>
  .slider::before,
  .slider::after {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    max-height: 1.8rem;
    content: '';
  }
  .slider::before {
    background: linear-gradient(
      90deg,
      var(--color-background-gradient-player-begin),
      var(--color-background-gradient-player-end)
    );
    left: 0;
    width: 0.6rem;
  }
  .slider::after {
    background: linear-gradient(
      270deg,
      var(--color-background-gradient-player-begin),
      var(--color-background-gradient-player-end)
    );
    right: 0;
    width: 1.2rem;
  }
</style>