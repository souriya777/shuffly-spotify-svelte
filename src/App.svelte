<script>
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <h1>Spotify</h1>
  <!-- <img src={logo} alt="Svelte Logo" /> -->
</main>

<style>
  /* FIXME */
  @font-face {
    font-family: "spotify-circular";
    src: url("/fonts/spotify-circular-regular.woff2");
  }
  /* FIXME */
  @font-face {
    font-family: "spotify-circular-bold";
    src: url("/fonts/spotify-circular-bold.woff2");
  }
  /* FIXME */
  @font-face {
    font-family: "spotify-circular-light";
    src: url("/fonts/spotify-circular-light.woff2");
  }
  /* FIXME */
  @font-face {
    font-family: "fruktur";
    src: url("/fonts/frukturPUBLIC.ttf");
  }
  :root {
    /* FONT */
    --font-family: "spotify-circular";
    --font-size-content: 1.6rem;
    --font-size-button: 1.4rem;
    /* COLOR */
    --color-background: #121212;
    /* --color-background-3: #181818; */
    --color-text: #fff;
    --color-text-inactive: #b3b3b3;
    --color-button-active: #282828;
    --color-button-outlined: #363636;
    --color-action: #1db954;
    /* Z-INDEX */
    --z-index-base: 0;
    --z-index-popup: 1;
    --z-index-max: 2;
    /* SPOTIFT FIXME */
    --background-base: #121212;
    --background-highlight: #1a1a1a;
    --background-press: #000;
    --background-elevated-base: #242424;
    --background-elevated-highlight: #2a2a2a;
    --background-elevated-press: #000;
    --background-tinted-base: hsla(0, 0%, 100%, 0.07);
    --background-tinted-highlight: hsla(0, 0%, 100%, 0.1);
    --background-tinted-press: hsla(0, 0%, 100%, 0.04);
    --background-unsafe-for-small-text-base: #121212;
    --background-unsafe-for-small-text-highlight: #121212;
    --background-unsafe-for-small-text-press: #121212;
    --text-base: #fff;
    --text-subdued: #a7a7a7;
    --text-bright-accent: #1ed760;
    --text-negative: #f15e6c;
    --text-warning: #ffa42b;
    --text-positive: #1ed760;
    --text-announcement: #3d91f4;
    --essential-base: #fff;
    --essential-subdued: #727272;
    --essential-bright-accent: #1ed760;
    --essential-negative: #e91429;
    --essential-warning: #ffa42b;
    --essential-positive: #1ed760;
    --essential-announcement: #0d72ea;
    --decorative-base: #fff;
    --decorative-subdued: #292929;
  }
  html {
    font-size: 62.5%;
    word-spacing: 0.1rem;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    font-family: var(--font-family);
    font-size: var(--font-size-content);
  }
  /* FIXME */
  h1 {
    font-family: "spotify-circular-bold";
  }
  .app {
    /* FIXME */
    /* display: grid;
    grid-template-areas:
      "main"
      "player"
      "nav";
    grid-template-rows: 1fr 4.5rem 4.7rem;*/
    /* height: 100vh; */
  }
  /* FIXME */
  /* main {
    grid-area: main;
    padding: 1.2rem;
    background-color: lightcyan;
  } */
  nav {
    grid-area: nav;
    background-color: lightgreen;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
</style>
