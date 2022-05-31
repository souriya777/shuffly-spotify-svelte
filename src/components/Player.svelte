<script>
  import Icon from '$lib/Icon.svelte';
  import PlayerTitle from './PlayerTitle.svelte';

  const title =
    'Beethoven: Piano Sonata No. 14 in C-Sharp Minor, Op. 27 No. 2 "Moonlight": I. Adagio sostenuto';
  const artists = 'Ludwig van Beethoven, Mikhail Pletnev';
  const device = 'souriya';
</script>

<div class="player">
  <img src="https://via.placeholder.com/150" alt={`${title} • ${artists}`} />
  <div class="info">
    <PlayerTitle {title} {artists} />
    <div class="device">
      <Icon name="listened" width="12" height="12" viewBoxWidth="16" viewBoxHeight="16" /><span
        >{device}</span
      >
    </div>
  </div>
  <div class="icon">
    <button>
      <Icon name="mobile" viewBoxWidth="16" viewBoxHeight="16" />
    </button>
  </div>
  <div class="icon">
    <button>
      <Icon name="play" viewBoxWidth="16" viewBoxHeight="16" />
    </button>
  </div>
</div>

<style>
  .player {
    display: flex;
    align-items: center;
    padding: 0.6rem;
  }
  img {
    height: 4rem;
  }
  .info {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    margin-left: 0.6rem;
    min-height: 3.8rem;
    justify-content: space-around;
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
  }
  .device {
    display: flex;
    align-items: center;
  }
  .device > span {
    margin-left: 0.4rem;
  }
  .icon {
    margin: 0 0.6rem;
  }
</style>
