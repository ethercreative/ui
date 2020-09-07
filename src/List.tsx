import * as React from 'react';
import { classify } from './helpers/classify';

const MODE = {
  disc: 'list-disc',
  decimal: 'list-decimal',
  none: 'list-none',
};

const GAP = {
  '1': 'gap-1',
  '2': 'gap-2',
  '3': 'gap-3',
  '4': 'gap-4',
  '5': 'gap-5',
  '6': 'gap-6',
  '8': 'gap-8',
  '10': 'gap-10',
  '12': 'gap-12',
  '16': 'gap-16',
  '20': 'gap-20',
  '24': 'gap-24',
  '32': 'gap-32',
  '40': 'gap-40',
  '48': 'gap-48',
  '56': 'gap-56',
  '64': 'gap-64',
};

const GAPS = {
  default: GAP,
  sm: {
    '1': 'sm:gap-1',
    '2': 'sm:gap-2',
    '3': 'sm:gap-3',
    '4': 'sm:gap-4',
    '5': 'sm:gap-5',
    '6': 'sm:gap-6',
    '8': 'sm:gap-8',
    '10': 'sm:gap-10',
    '12': 'sm:gap-12',
    '16': 'sm:gap-16',
    '20': 'sm:gap-20',
    '24': 'sm:gap-24',
    '32': 'sm:gap-32',
    '40': 'sm:gap-40',
    '48': 'sm:gap-48',
    '56': 'sm:gap-56',
    '64': 'sm:gap-64',
  },
  md: {
    '1': 'md:gap-1',
    '2': 'md:gap-2',
    '3': 'md:gap-3',
    '4': 'md:gap-4',
    '5': 'md:gap-5',
    '6': 'md:gap-6',
    '8': 'md:gap-8',
    '10': 'md:gap-10',
    '12': 'md:gap-12',
    '16': 'md:gap-16',
    '20': 'md:gap-20',
    '24': 'md:gap-24',
    '32': 'md:gap-32',
    '40': 'md:gap-40',
    '48': 'md:gap-48',
    '56': 'md:gap-56',
    '64': 'md:gap-64',
  },
  lg: {
    '1': 'lg:gap-1',
    '2': 'lg:gap-2',
    '3': 'lg:gap-3',
    '4': 'lg:gap-4',
    '5': 'lg:gap-5',
    '6': 'lg:gap-6',
    '8': 'lg:gap-8',
    '10': 'lg:gap-10',
    '12': 'lg:gap-12',
    '16': 'lg:gap-16',
    '20': 'lg:gap-20',
    '24': 'lg:gap-24',
    '32': 'lg:gap-32',
    '40': 'lg:gap-40',
    '48': 'lg:gap-48',
    '56': 'lg:gap-56',
    '64': 'lg:gap-64',
  },
  xl: {
    '1': 'xl:gap-1',
    '2': 'xl:gap-2',
    '3': 'xl:gap-3',
    '4': 'xl:gap-4',
    '5': 'xl:gap-5',
    '6': 'xl:gap-6',
    '8': 'xl:gap-8',
    '10': 'xl:gap-10',
    '12': 'xl:gap-12',
    '16': 'xl:gap-16',
    '20': 'xl:gap-20',
    '24': 'xl:gap-24',
    '32': 'xl:gap-32',
    '40': 'xl:gap-40',
    '48': 'xl:gap-48',
    '56': 'xl:gap-56',
    '64': 'xl:gap-64',
  },
};

interface Props {
  order?: 'unordered' | 'ordered';
  mode?: keyof typeof MODE;
  gap?:
    | keyof typeof GAP
    | {
        default?: keyof typeof GAPS.default;
        sm?: keyof typeof GAPS.sm;
        md?: keyof typeof GAPS.md;
        lg?: keyof typeof GAPS.lg;
        xl?: keyof typeof GAPS.xl;
      };
  className?: React.HTMLAttributes<HTMLUListElement>['className'];
  style?: React.HTMLAttributes<HTMLUListElement>['style'];
}

const List: React.FC<Props> = ({
  order = 'unordered',
  mode = 'none',
  gap,
  className,
  style,
  children,
}) => {
  let computedClass = '';

  if (mode) {
    computedClass += ` ${MODE[mode]}`;
  }

  if (gap) {
    if (typeof gap === 'string') {
      computedClass += ` ${GAP[gap]}`;
    } else {
      Object.keys(gap).forEach((key) => {
        computedClass += ` ${GAPS[key][gap[key]]}`;
      });
    }
  }

  const compiledClass = classify([computedClass, className]);

  switch (order) {
    case 'ordered':
      return (
        <ol className={compiledClass} style={style}>
          {children}
        </ol>
      );

    default:
      return (
        <ul className={compiledClass} style={style}>
          {children}
        </ul>
      );
  }
};

export default List;
