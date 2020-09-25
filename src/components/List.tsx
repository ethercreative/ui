import * as React from 'react';
import { classify } from '../helpers/classify';
import { BreakpointClasses, breakpoints } from '../helpers/breakpoints';
import { computeClass } from '../helpers/computeClass';

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
] as const;

type GAPS = keyof { [key in typeof gaps[number]]: string };

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
  const prefix = 'gap-y';
  GAP[gap] = `${prefix}-${gap}`;

  breakpoints.forEach((breakpoint) => {
    GAPS[breakpoint][gap] = `${breakpoint}:${prefix}-${gap}`;
  });
});

interface Props {
  order?: 'unordered' | 'ordered';
  mode?: keyof typeof MODE;
  gap?:
    | GAPS
    | {
        default?: GAPS;
        sm?: GAPS;
        md?: GAPS;
        lg?: GAPS;
        xl?: GAPS;
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
  const computedClasses: (string | undefined)[] = [
    'grid',
    computeClass(gap, GAP, GAPS),
  ];

  if (mode) {
    computedClasses.push(MODE[mode]);
  }

  const compiledClass = classify([...computedClasses, className]);

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
