export const classify = (strings: (string | undefined)[]): string =>
  strings
    .filter((string) => string)
    .join(' ')
    .replace(/  /g, ' ')
    .replace(/undefined/g, ' ')
    .replace(/default:/g, '')
    .trim();
