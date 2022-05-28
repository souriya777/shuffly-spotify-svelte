<script>
  import Icon from '$lib/Icon.svelte';
</script>

<ul>
  <li><button><Icon name="select" />select</button></li>
  <li><button><Icon name="shuffle" />shuffle</button></li>
  <li><button><Icon name="queue" />queue</button></li>
</ul>

<style>
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding-left: 0;
    list-style: none;
  }
  li > button {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
</style>
