export const classify = (strings: (string | undefined)[]): string =>
  strings
    .filter((string) => string)
    .join(' ')
    .replace(/  /g, ' ')
    .trim();
