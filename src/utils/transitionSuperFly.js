import { quintOut, cubicOut } from 'svelte/easing';

export function superFly(
  node,
  { delay, duration, x = 0, y = 0, motion = quintOut, out = false },
  translateXIn,
  translateXOut,
) {
  const style = getComputedStyle(node);
  const transform = style.transform === 'none' ? '' : style.transform;

  return {
    delay,
    duration,
    css: (t) => {
      const easeMotion = motion(t);

      if (out) return `transform: translateX(${translateXOut(t, x)}px);`;

      return `
      transform: ${transform} translate(${translateXIn(x, easeMotion)}px, ${
        (1 - easeMotion) * y
      }px);
      background-color: var(--color-background);`;
    },
  };
}

export function superFlyLeft(
  node,
  { delay, duration, x = 0, y = 0, motion = quintOut, out = false },
) {
  return superFly(
    node,
    {
      delay,
      duration,
      x,
      y,
      motion,
      out,
    },
    (x, easeMotion) => `${(1 - easeMotion) * x}`,
    (t, x) => `-${(1 - cubicOut(t)) * x}`,
  );
}

export function superFlyRight(
  node,
  { delay, duration, x = 0, y = 0, motion = quintOut, out = false },
) {
  return superFly(
    node,
    {
      delay,
      duration,
      x,
      y,
      motion,
      out,
    },
    (x, easeMotion) => `-${(1 - easeMotion) * x}`,
    (t, x) => `${(1 - cubicOut(t)) * x}`,
  );
}
