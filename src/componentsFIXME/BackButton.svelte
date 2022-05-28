<script>
  import { tick } from 'svelte';
  import { back } from '../stores/stores';
  import Icon from './Icon.svelte';

  async function goBack() {
    $back = true;
    await tick;
    window.history.back();
  }
</script>

<div class="back-button">
  <button on:click={goBack}><Icon name="back" height="14" width="14" /></button>
</div>

<style>
  .back-button {
    position: fixed;
    top: 1.6rem;
    left: 1rem;
  }

  button {
    color: var(--color-text);
  }
</style>
