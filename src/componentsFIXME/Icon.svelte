<script>
  import SpotifySvg from '$assets/svg/SpotifySvg.svelte';
  import EyeThinSvg from '$assets/svg/EyeThinSvg.svelte';
  import EyeOffThinSvg from '$assets/svg/EyeOffThinSvg.svelte';
  import BackSvg from '$assets/svg/BackSvg.svelte';
  import SelectSvg from '$assets/svg/SelectSvg.svelte';
  import ShuffleSvg from '$assets/svg/ShuffleSvg.svelte';
  import QueueSvg from '$assets/svg/QueueSvg.svelte';
  import MobileSvg from '$assets/svg/MobileSvg.svelte';
  import PlaySvg from '$assets/svg/PlaySvg.svelte';
  import PauseSvg from '$assets/svg/PauseSvg.svelte';
  import ListenedSvg from '$assets/svg/ListenedSvg.svelte';

  export let name;
  export let width = '24';
  export let height = '24';
  export let viewBoxWidth = '24';
  export let viewBoxHeight = '24';
  export let focusable = false;
  export let fill = 'var(--color-text)';

  let icons = [
    {
      name: 'spotify',
      svgComponent: SpotifySvg
    },
    {
      name: 'eyeThin',
      svgComponent: EyeThinSvg
    },
    {
      name: 'eyeOffThin',
      svgComponent: EyeOffThinSvg
    },
    {
      name: 'back',
      svgComponent: BackSvg
    },
    {
      name: 'select',
      svgComponent: SelectSvg
    },
    {
      name: 'shuffle',
      svgComponent: ShuffleSvg
    },
    {
      name: 'queue',
      svgComponent: QueueSvg
    },
    {
      name: 'mobile',
      svgComponent: MobileSvg
    },
    {
      name: 'play',
      svgComponent: PlaySvg
    },
    {
      name: 'pause',
      svgComponent: PauseSvg
    },
    {
      name: 'listened',
      svgComponent: ListenedSvg
    }
  ];

  const { svgComponent } = icons.find((i) => i.name === name);
</script>

<svg
  role="img"
  class={$$props.class}
  {focusable}
  {width}
  {height}
  {fill}
  viewBox="0 0 {viewBoxWidth} {viewBoxHeight}"
>
  <svelte:component this={svgComponent} />
</svg>
