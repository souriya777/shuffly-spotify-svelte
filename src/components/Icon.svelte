<script>
  import SpotifySvg from '~/assets/svgFIXME/SpotifySvg.svelte';
  import EyeThinSvg from '~/assets/svgFIXME/EyeThinSvg.svelte';
  import EyeOffThinSvg from '~/assets/svgFIXME/EyeOffThinSvg.svelte';
  import BackSvg from '~/assets/svgFIXME/BackSvg.svelte';
  import SelectSvg from '~/assets/svgFIXME/SelectSvg.svelte';
  import ShuffleSvg from '~/assets/svgFIXME/ShuffleSvg.svelte';
  import QueueSvg from '~/assets/svgFIXME/QueueSvg.svelte';
  import MobileSvg from '~/assets/svgFIXME/MobileSvg.svelte';
  import PlaySvg from '~/assets/svgFIXME/PlaySvg.svelte';
  import PauseSvg from '~/assets/svgFIXME/PauseSvg.svelte';
  import ListenedSvg from '~/assets/svgFIXME/ListenedSvg.svelte';

  export let name;
  export let width = '24';
  export let height = '24';
  export let viewBoxWidth = '24';
  export let viewBoxHeight = '24';
  export let focusable = false;
  export let fill = 'var(--color-text)';

  const icons = [
    {
      name: 'spotify',
      svgComponent: SpotifySvg,
    },
    {
      name: 'eyeThin',
      svgComponent: EyeThinSvg,
    },
    {
      name: 'eyeOffThin',
      svgComponent: EyeOffThinSvg,
    },
    {
      name: 'back',
      svgComponent: BackSvg,
    },
    {
      name: 'select',
      svgComponent: SelectSvg,
    },
    {
      name: 'shuffle',
      svgComponent: ShuffleSvg,
    },
    {
      name: 'queue',
      svgComponent: QueueSvg,
    },
    {
      name: 'mobile',
      svgComponent: MobileSvg,
    },
    {
      name: 'play',
      svgComponent: PlaySvg,
    },
    {
      name: 'pause',
      svgComponent: PauseSvg,
    },
    {
      name: 'listened',
      svgComponent: ListenedSvg,
    },
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
