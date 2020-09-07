import * as React from 'react';
import { classify } from './helpers/classify';

const LEVEL = {
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
};

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

const SIZES = {
  default: SIZE,
  sm: {
    xs: 'sm:text-xs',
    sm: 'sm:text-sm',
    base: 'sm:text-base',
    lg: 'sm:text-lg',
    xl: 'sm:text-xl',
    '2xl': 'sm:text-2xl',
    '3xl': 'sm:text-3xl',
    '4xl': 'sm:text-4xl',
    '5xl': 'sm:text-5xl',
    '6xl': 'sm:text-6xl',
  },
  md: {
    xs: 'md:text-xs',
    sm: 'md:text-sm',
    base: 'md:text-base',
    lg: 'md:text-lg',
    xl: 'md:text-xl',
    '2xl': 'md:text-2xl',
    '3xl': 'md:text-3xl',
    '4xl': 'md:text-4xl',
    '5xl': 'md:text-5xl',
    '6xl': 'md:text-6xl',
  },
  lg: {
    xs: 'lg:text-xs',
    sm: 'lg:text-sm',
    base: 'lg:text-base',
    lg: 'lg:text-lg',
    xl: 'lg:text-xl',
    '2xl': 'lg:text-2xl',
    '3xl': 'lg:text-3xl',
    '4xl': 'lg:text-4xl',
    '5xl': 'lg:text-5xl',
    '6xl': 'lg:text-6xl',
  },
  xl: {
    xs: 'xl:text-xs',
    sm: 'xl:text-sm',
    base: 'xl:text-base',
    lg: 'xl:text-lg',
    xl: 'xl:text-xl',
    '2xl': 'xl:text-2xl',
    '3xl': 'xl:text-3xl',
    '4xl': 'xl:text-4xl',
    '5xl': 'xl:text-5xl',
    '6xl': 'xl:text-6xl',
  },
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
  level?: keyof typeof LEVEL;
  size?:
    | keyof typeof SIZE
    | {
        default?: keyof typeof SIZES.default;
        sm?: keyof typeof SIZES.sm;
        md?: keyof typeof SIZES.md;
        lg?: keyof typeof SIZES.lg;
        xl?: keyof typeof SIZES.xl;
      };
  weight?: keyof typeof WEIGHT;
  align?: keyof typeof ALIGN;
  leading?: keyof typeof LEADING;
  tracking?: keyof typeof TRACKING;
  className?: React.HTMLAttributes<HTMLHeadingElement>['className'];
  style?: React.HTMLAttributes<HTMLHeadingElement>['style'];
}

const Heading: React.FC<Props> = ({
  level = '1',
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
    if (typeof size === 'string') {
      computedClass += ` ${SIZE[size]}`;
    } else {
      Object.keys(size).forEach((key) => {
        computedClass += ` ${SIZES[key][size[key]]}`;
      });
    }
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

  const compiledClass = classify([computedClass, className]);

  switch (level) {
    case '2':
      return (
        <h2 className={compiledClass} style={style}>
          {children}
        </h2>
      );

    case '3':
      return (
        <h3 className={compiledClass} style={style}>
          {children}
        </h3>
      );

    case '4':
      return (
        <h4 className={compiledClass} style={style}>
          {children}
        </h4>
      );

    case '5':
      return (
        <h5 className={compiledClass} style={style}>
          {children}
        </h5>
      );

    case '6':
      return (
        <h6 className={compiledClass} style={style}>
          {children}
        </h6>
      );

    default:
      return (
        <h1 className={compiledClass} style={style}>
          {children}
        </h1>
      );
  }
};

export default Heading;
