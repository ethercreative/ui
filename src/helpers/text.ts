export const textSizes = [
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
] as const;

export type TEXT_SIZES = keyof { [key in typeof textSizes[number]]: string };

export const fontWeights = [
  'hairline',
  'thin',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
] as const;

export type FONT_WEIGHTS = keyof {
  [key in typeof fontWeights[number]]: string;
};

export const textAligns = ['left', 'right', 'center'] as const;

export type TEXT_ALIGNS = keyof { [key in typeof textAligns[number]]: string };

export const leadings = [
  'none',
  'tight',
  'snug',
  'normal',
  'relaxed',
  'loose',
] as const;

export type LEADINGS = keyof { [key in typeof leadings[number]]: string };

export const trackings = [
  'tighter',
  'tight',
  'wide',
  'normal',
  'wider',
  'widest',
] as const;

export type TRACKINGS = keyof { [key in typeof trackings[number]]: string };
