import * as React from 'react';

const SIZE = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
};

const WEIGHT = {
  hairline: 'font-hairline',
  thin: 'font-thin',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
};

const ALIGN = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
};

const LEADING = {
  none: 'leading-none',
  tight: 'leading-tight',
  snug: 'leading-snug',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
};

const TRACKING = {
  tighter: 'tracking-tighter',
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
  wider: 'tracking-wider',
  widest: 'tracking-widest',
};

interface Props {
  size?: keyof typeof SIZE;
  weight?: keyof typeof WEIGHT;
  align?: keyof typeof ALIGN;
  leading?: keyof typeof LEADING;
  tracking?: keyof typeof TRACKING;
  className?: React.HTMLAttributes<HTMLParagraphElement>['className'];
  style?: React.HTMLAttributes<HTMLParagraphElement>['style'];
}

const Text: React.FC<Props> = ({
  size = 'base',
  weight,
  align,
  leading,
  tracking,
  className,
  style,
  children,
}) => {
  let computedClass = '';

  if (size) {
    computedClass += ` ${SIZE[size]}`;
  }

  if (weight) {
    computedClass += ` ${WEIGHT[weight]}`;
  }

  if (align) {
    computedClass += ` ${ALIGN[align]}`;
  }

  if (leading) {
    computedClass += ` ${LEADING[leading]}`;
  }

  if (tracking) {
    computedClass += ` ${TRACKING[tracking]}`;
  }

  return (
    <p className={`${computedClass} ${className}`} style={style}>
      {children}
    </p>
  );
};

export default Text;
