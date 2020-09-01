import * as React from 'react';

const LEVELS = ['1', '2', '3', '4', '5', '6'];

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
  leading?: keyof typeof LEADING;
  tracking?: keyof typeof TRACKING;
  className?: React.HTMLAttributes<HTMLParagraphElement>['className'];
  style?: React.HTMLAttributes<HTMLParagraphElement>['style'];
}

const Heading: React.FC<Props> = ({
  level = '1',
  size = 'base',
  leading,
  tracking,
  className,
  children,
}) => {
  let computedClass = '';

  if (size) {
    computedClass += ` ${SIZES[size]}`;
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
      return <h2 className={compiledClass}>{children}</h2>;

    case '3':
      return <h3 className={compiledClass}>{children}</h3>;

    case '4':
      return <h4 className={compiledClass}>{children}</h4>;

    case '5':
      return <h5 className={compiledClass}>{children}</h5>;

    case '6':
      return <h6 className={compiledClass}>{children}</h6>;

    default:
      return <h1 className={compiledClass}>{children}</h1>;
  }
};

export default Heading;
