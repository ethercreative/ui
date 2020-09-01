import * as React from 'react';

const LEVELS = {
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
};

const SIZES = {
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
  level?: keyof typeof LEVELS;
  size?: keyof typeof SIZES;
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
    computedClass += ` ${SIZES[size]}`;
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

  const compiledClass = `${computedClass} ${className}`;

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
