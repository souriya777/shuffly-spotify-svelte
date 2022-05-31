<script>
  import InputText from '$lib/InputText.svelte';
  import Icon from './Icon.svelte';
  export let id;
  export let error = false;

  let eyeOff = true;
  let type = 'password';

  function switchEye() {
    eyeOff = !eyeOff;
    type = type === 'password' ? 'text' : 'password';
  }
</script>

<div class="input-password">
  <InputText {id} {error} {type} />

  <button class="eye" on:click|preventDefault={switchEye}>
    {#if eyeOff}
      <Icon name="eyeOffThin" />
    {:else}
      <Icon name="eyeThin" />
    {/if}
  </button>
</div>

<style>
  .input-password {
    position: relative;
  }
  :global(.input-password > input) {
    width: 100%;
  }
  .eye {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
  }
</style>
