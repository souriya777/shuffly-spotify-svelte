<script>
  export let variant;
  export let to;
  export let deactivated = false;

  $: buttonClass = `${variant}`;
</script>

<a class={buttonClass} class:deactivated href={to} sveltekit:prefetch
  ><slot /></a
>

<style>
  a {
    width: 86%;
    max-width: 45rem;
    padding: 1rem;
    border-radius: 50rem;
    color: inherit;
    font-family: 'spotify-circular-bold';
    font-size: 1.4rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }
  a:visited {
    color: inherit;
  }
  a.outlined {
    border: 0.05rem solid var(--color-button-outlined);
  }
  a.filled {
    background-color: var(--color-button-background);
    color: var(--color-text-secondary);
  }
  a.deactivated {
    background-color: var(--color-button-deactivated);
  }
</style>
