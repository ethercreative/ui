import * as React from 'react';
import { classify } from '../helpers/classify';

import {
  BreakpointClasses,
  breakpoints,
  defaultBreakpoints,
} from '../helpers/breakpoints';

const MODE = {
  disc: 'list-disc',
  decimal: 'list-decimal',
  none: 'list-none',
};

const gaps = [
  '0',
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

const GAPS: BreakpointClasses = { ...defaultBreakpoints };

gaps.forEach((gap) => {
  const prefix = 'gap-y';
  GAP[gap] = `${prefix}-${gap}`;

  breakpoints.forEach((breakpoint) => {
    if (!GAPS[breakpoint]) {
      GAPS[breakpoint] = {};
    }

    GAPS[breakpoint][gap] = `${breakpoint}:${prefix}-${gap}`;
  });
});

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
      computedClass += ` grid ${GAP[gap]}`;
    } else {
      Object.keys(gap).forEach((key) => {
        computedClass += ` grid ${GAPS[key][gap[key]]}`;
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
