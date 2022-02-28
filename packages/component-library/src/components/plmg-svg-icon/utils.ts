import { Build, getAssetPath } from '@stencil/core';

const iconCache = {};
const requestCache = {};

export async function fetchIcon({ icon }): Promise<string> {
  if (iconCache[icon]) {
    return iconCache[icon];
  }
  if (!requestCache[icon]) {
    requestCache[icon] = fetch(
      getAssetPath(`https://static.ducky.eco/plumage/icons/${icon}.svg`)
    )
      .then((resp) => resp.text())
      .catch(() => {
        console.error(`"${icon}" is not a valid name`);
        return '';
      });
  }

  const path = await requestCache[icon];
  iconCache[icon] = path;

  return path;
}

export const supportsIntersectionObserver =
  Build.isBrowser &&
  typeof window !== 'undefined' &&
  (window as any).IntersectionObserver;
