<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  });
</script>

<script>
  import Screen from '~/components/Screen.svelte';
  import BackButton from '~/components/BackButton.svelte';

  export let key;
</script>

<main>
  <BackButton />
  <Screen refresh={key}>
    <slot />
  </Screen>
</main>

<style>
  @font-face {
    font-family: 'spotify-circular';
    src: url('/fonts/spotify-circular.woff2');
  }
  @font-face {
    font-family: 'spotify-circular-bold';
    src: url('/fonts/spotify-circular-bold.woff2');
  }
  :root {
    /* FONT */
    --font-family: 'spotify-circular';
    --font-size-content: 1.6rem;
    --font-size-button: 1.4rem;

    /* COLOR */
    --color-background: #121212;
    --color-background-gradient-player-begin: #181818;
    --color-background-gradient-player-end: rgba(23, 23, 23, 0);
    --color-text: #fff;
    --color-text-secondary: #121212;
    --color-text-error: #cc192b;
    --color-button-outlined: #383838;
    --color-button-background: #fff;
    --color-button-deactivated: #4e4e4e;
    --color-input: #707070;
    --color-input-deactivated: #434343;
    --color-action: #1db954;

    /* Z-INDEX */
    --z-index-base: 0;
    --z-index-popup: 1;
    --z-index-max: 2;
  }

  :global(html) {
    font-size: 62.5%;
    word-spacing: 0.1rem;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
    margin: 0;
  }

  :global(body) {
    font-family: var(--font-family);
    font-size: var(--font-size-content);
    touch-action: none;
  }

  :global(button) {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  :global(.content) {
    background-color: hotpink;
    overflow: scroll;
    padding: 0 1.4rem;
  }

  main {
    /* Hack 100vh viewport on iOS : */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
