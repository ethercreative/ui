import * as React from 'react';
import { classify } from '../helpers/classify';
import { BreakpointClasses, breakpoints } from '../helpers/breakpoints';

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

const gaps = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '8',
  '10',
  '12',
  '16',
  '20',
  '24',
  '32',
  '40',
  '48',
  '56',
  '64',
];

const GAP: {
  [key: string]: string;
} = {};

const GAPS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

gaps.forEach((gap) => {
  const prefix = 'gap';
  GAP[gap] = `${prefix}-${gap}`;

  breakpoints.forEach((breakpoint) => {
    if (!GAPS[breakpoint]) {
      GAPS[breakpoint] = {};
    }

    GAPS[breakpoint][gap] = `${breakpoint}:${prefix}-${gap}`;
  });
});

const GAP_X: {
  [key: string]: string;
} = {};

const GAPS_X: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

gaps.forEach((gap) => {
  const prefix = 'gap-x';
  GAP_X[gap] = `${prefix}-${gap}`;

  breakpoints.forEach((breakpoint) => {
    if (!GAPS_X[breakpoint]) {
      GAPS_X[breakpoint] = {};
    }

    GAPS_X[breakpoint][gap] = `${breakpoint}:${prefix}-${gap}`;
  });
});

const GAP_Y: {
  [key: string]: string;
} = {};

const GAPS_Y: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

gaps.forEach((gap) => {
  const prefix = 'gap-y';
  GAP_Y[gap] = `${prefix}-${gap}`;

  breakpoints.forEach((breakpoint) => {
    if (!GAPS_Y[breakpoint]) {
      GAPS_Y[breakpoint] = {};
    }

    GAPS_Y[breakpoint][gap] = `${breakpoint}:${prefix}-${gap}`;
  });
});

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