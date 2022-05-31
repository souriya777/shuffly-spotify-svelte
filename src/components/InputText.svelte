<script>
  export let id;
  export let error = false;
  export let type = 'text';
</script>

<input {type} class:error name={id} {id} />

<style>
  input {
    height: 4.8rem;
    padding: 0 3.8rem 0 1.4rem;
    border: none;
    border-radius: 0.4rem;
    background-color: var(--color-input-deactivated);
    color: var(--color-text);
    font-size: 1.4rem;
  }
  input:focus {
    background-color: var(--color-input);
  }
  input.error {
    color: var(--color-text-error);
  }
</style>
