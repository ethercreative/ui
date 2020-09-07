import * as React from 'react';
import { classify } from './helpers/classify';

const COLUMN = {
  '1': 'grid-cols-1',
  '2': 'grid-cols-2',
  '3': 'grid-cols-3',
  '4': 'grid-cols-4',
  '5': 'grid-cols-5',
  '6': 'grid-cols-6',
  '7': 'grid-cols-7',
  '8': 'grid-cols-8',
  '9': 'grid-cols-9',
  '10': 'grid-cols-10',
  '11': 'grid-cols-11',
  '12': 'grid-cols-12',
};

const ROW = {
  '1': 'grid-rows-1',
  '2': 'grid-rows-2',
  '3': 'grid-rows-3',
  '4': 'grid-rows-4',
  '5': 'grid-rows-5',
  '6': 'grid-rows-6',
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

const GAP_X = {
  '1': 'gap-x-1',
  '2': 'gap-x-2',
  '3': 'gap-x-3',
  '4': 'gap-x-4',
  '5': 'gap-x-5',
  '6': 'gap-x-6',
  '8': 'gap-x-8',
  '10': 'gap-x-10',
  '12': 'gap-x-12',
  '16': 'gap-x-16',
  '20': 'gap-x-20',
  '24': 'gap-x-24',
  '32': 'gap-x-32',
  '40': 'gap-x-40',
  '48': 'gap-x-48',
  '56': 'gap-x-56',
  '64': 'gap-x-64',
};

const GAPS_X = {
  default: GAP_X,
  sm: {
    '1': 'sm:gap-x-1',
    '2': 'sm:gap-x-2',
    '3': 'sm:gap-x-3',
    '4': 'sm:gap-x-4',
    '5': 'sm:gap-x-5',
    '6': 'sm:gap-x-6',
    '8': 'sm:gap-x-8',
    '10': 'sm:gap-x-10',
    '12': 'sm:gap-x-12',
    '16': 'sm:gap-x-16',
    '20': 'sm:gap-x-20',
    '24': 'sm:gap-x-24',
    '32': 'sm:gap-x-32',
    '40': 'sm:gap-x-40',
    '48': 'sm:gap-x-48',
    '56': 'sm:gap-x-56',
    '64': 'sm:gap-x-64',
  },
  md: {
    '1': 'md:gap-x-1',
    '2': 'md:gap-x-2',
    '3': 'md:gap-x-3',
    '4': 'md:gap-x-4',
    '5': 'md:gap-x-5',
    '6': 'md:gap-x-6',
    '8': 'md:gap-x-8',
    '10': 'md:gap-x-10',
    '12': 'md:gap-x-12',
    '16': 'md:gap-x-16',
    '20': 'md:gap-x-20',
    '24': 'md:gap-x-24',
    '32': 'md:gap-x-32',
    '40': 'md:gap-x-40',
    '48': 'md:gap-x-48',
    '56': 'md:gap-x-56',
    '64': 'md:gap-x-64',
  },
  lg: {
    '1': 'lg:gap-x-1',
    '2': 'lg:gap-x-2',
    '3': 'lg:gap-x-3',
    '4': 'lg:gap-x-4',
    '5': 'lg:gap-x-5',
    '6': 'lg:gap-x-6',
    '8': 'lg:gap-x-8',
    '10': 'lg:gap-x-10',
    '12': 'lg:gap-x-12',
    '16': 'lg:gap-x-16',
    '20': 'lg:gap-x-20',
    '24': 'lg:gap-x-24',
    '32': 'lg:gap-x-32',
    '40': 'lg:gap-x-40',
    '48': 'lg:gap-x-48',
    '56': 'lg:gap-x-56',
    '64': 'lg:gap-x-64',
  },
  xl: {
    '1': 'xl:gap-x-1',
    '2': 'xl:gap-x-2',
    '3': 'xl:gap-x-3',
    '4': 'xl:gap-x-4',
    '5': 'xl:gap-x-5',
    '6': 'xl:gap-x-6',
    '8': 'xl:gap-x-8',
    '10': 'xl:gap-x-10',
    '12': 'xl:gap-x-12',
    '16': 'xl:gap-x-16',
    '20': 'xl:gap-x-20',
    '24': 'xl:gap-x-24',
    '32': 'xl:gap-x-32',
    '40': 'xl:gap-x-40',
    '48': 'xl:gap-x-48',
    '56': 'xl:gap-x-56',
    '64': 'xl:gap-x-64',
  },
};

const GAP_Y = {
  '1': 'gap-y-1',
  '2': 'gap-y-2',
  '3': 'gap-y-3',
  '4': 'gap-y-4',
  '5': 'gap-y-5',
  '6': 'gap-y-6',
  '8': 'gap-y-8',
  '10': 'gap-y-10',
  '12': 'gap-y-12',
  '16': 'gap-y-16',
  '20': 'gap-y-20',
  '24': 'gap-y-24',
  '32': 'gap-y-32',
  '40': 'gap-y-40',
  '48': 'gap-y-48',
  '56': 'gap-y-56',
  '64': 'gap-y-64',
};

const GAPS_Y = {
  default: GAP_Y,
  sm: {
    '1': 'sm:gap-y-1',
    '2': 'sm:gap-y-2',
    '3': 'sm:gap-y-3',
    '4': 'sm:gap-y-4',
    '5': 'sm:gap-y-5',
    '6': 'sm:gap-y-6',
    '8': 'sm:gap-y-8',
    '10': 'sm:gap-y-10',
    '12': 'sm:gap-y-12',
    '16': 'sm:gap-y-16',
    '20': 'sm:gap-y-20',
    '24': 'sm:gap-y-24',
    '32': 'sm:gap-y-32',
    '40': 'sm:gap-y-40',
    '48': 'sm:gap-y-48',
    '56': 'sm:gap-y-56',
    '64': 'sm:gap-y-64',
  },
  md: {
    '1': 'md:gap-y-1',
    '2': 'md:gap-y-2',
    '3': 'md:gap-y-3',
    '4': 'md:gap-y-4',
    '5': 'md:gap-y-5',
    '6': 'md:gap-y-6',
    '8': 'md:gap-y-8',
    '10': 'md:gap-y-10',
    '12': 'md:gap-y-12',
    '16': 'md:gap-y-16',
    '20': 'md:gap-y-20',
    '24': 'md:gap-y-24',
    '32': 'md:gap-y-32',
    '40': 'md:gap-y-40',
    '48': 'md:gap-y-48',
    '56': 'md:gap-y-56',
    '64': 'md:gap-y-64',
  },
  lg: {
    '1': 'lg:gap-y-1',
    '2': 'lg:gap-y-2',
    '3': 'lg:gap-y-3',
    '4': 'lg:gap-y-4',
    '5': 'lg:gap-y-5',
    '6': 'lg:gap-y-6',
    '8': 'lg:gap-y-8',
    '10': 'lg:gap-y-10',
    '12': 'lg:gap-y-12',
    '16': 'lg:gap-y-16',
    '20': 'lg:gap-y-20',
    '24': 'lg:gap-y-24',
    '32': 'lg:gap-y-32',
    '40': 'lg:gap-y-40',
    '48': 'lg:gap-y-48',
    '56': 'lg:gap-y-56',
    '64': 'lg:gap-y-64',
  },
  xl: {
    '1': 'xl:gap-y-1',
    '2': 'xl:gap-y-2',
    '3': 'xl:gap-y-3',
    '4': 'xl:gap-y-4',
    '5': 'xl:gap-y-5',
    '6': 'xl:gap-y-6',
    '8': 'xl:gap-y-8',
    '10': 'xl:gap-y-10',
    '12': 'xl:gap-y-12',
    '16': 'xl:gap-y-16',
    '20': 'xl:gap-y-20',
    '24': 'xl:gap-y-24',
    '32': 'xl:gap-y-32',
    '40': 'xl:gap-y-40',
    '48': 'xl:gap-y-48',
    '56': 'xl:gap-y-56',
    '64': 'xl:gap-y-64',
  },
};

interface Props {
  columns?: keyof typeof COLUMN;
  rows?: keyof typeof ROW;
  gap?:
    | keyof typeof GAP
    | {
        default?: keyof typeof GAPS.default;
        sm?: keyof typeof GAPS.sm;
        md?: keyof typeof GAPS.md;
        lg?: keyof typeof GAPS.lg;
        xl?: keyof typeof GAPS.xl;
      };
  gapX?:
    | keyof typeof GAP_X
    | {
        default?: keyof typeof GAPS_X.default;
        sm?: keyof typeof GAPS_X.sm;
        md?: keyof typeof GAPS_X.md;
        lg?: keyof typeof GAPS_X.lg;
        xl?: keyof typeof GAPS_X.xl;
      };
  gapY?:
    | keyof typeof GAP_Y
    | {
        default?: keyof typeof GAPS_Y.default;
        sm?: keyof typeof GAPS_Y.sm;
        md?: keyof typeof GAPS_Y.md;
        lg?: keyof typeof GAPS_Y.lg;
        xl?: keyof typeof GAPS_Y.xl;
      };
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Grid: React.FC<Props> = ({
  columns,
  rows,
  gap,
  gapX,
  gapY,
  className,
  style,
  children,
}) => {
  let computedClass = 'grid';

  if (columns) {
    computedClass += ` ${COLUMN[columns]}`;
  }

  if (rows) {
    computedClass += ` ${ROW[rows]}`;
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

  if (gapX) {
    if (typeof gapX === 'string') {
      computedClass += ` ${GAP_X[gapX]}`;
    } else {
      Object.keys(gapX).forEach((key) => {
        computedClass += ` ${GAPS_X[key][gapX[key]]}`;
      });
    }
  }

  if (gapY) {
    if (typeof gapY === 'string') {
      computedClass += ` ${GAP_Y[gapY]}`;
    } else {
      Object.keys(gapY).forEach((key) => {
        computedClass += ` ${GAPS_Y[key][gapY[key]]}`;
      });
    }
  }

  return (
    <div className={classify([computedClass, className])} style={style}>
      {children}
    </div>
  );
};

export default Grid;
