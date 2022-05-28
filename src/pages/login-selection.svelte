<script>
  import Button from '$lib/Button.svelte';
  import Icon from '$lib/Icon.svelte';
  import ButtonStyle from '$utils/ButtonStyle';
  import RoutePath from '$utils/RoutePath';
</script>

<svelte:head>
  <title>Shuffle my spotify</title>
</svelte:head>

<div class="login-selection-view">
  <div class="top">
    <Icon name="spotify" height="32" width="32" viewBoxWidth="496" viewBoxHeight="512" />
    <div class="marketing">Millions of songs.<br />Free on Spotify.</div>
  </div>
  <div class="bottom">
    <div class="button">
      <Button variant={ButtonStyle.OUTLINED} to={RoutePath.LOGIN}>log in</Button>
    </div>
  </div>
</div>

<style scoped>
  .top,
  .bottom {
    height: 50%;
  }
  .top {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .bottom {
    padding-top: 5rem;
  }

  .marketing {
    margin-top: 2.8rem;
    font-family: 'spotify-circular-bold';
    font-size: 3.2rem;
    letter-spacing: -0.12rem;
  }
  .button {
    display: flex;
    justify-content: center;
  }
</style>
