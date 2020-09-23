import * as React from 'react';
import { classify } from '../helpers/classify';
import { BreakpointClasses, breakpoints } from '../helpers/breakpoints';

const spans = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
] as const;

type SPANS = keyof { [key in typeof spans[number]]: string };

const SPAN: {
  [key: string]: string;
} = {};

const SPANS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

spans.forEach((span) => {
  const prefix = 'col-span';
  SPAN[span] = `${prefix}-${span}`;

  breakpoints.forEach((breakpoint) => {
    SPANS[breakpoint][span] = `${breakpoint}:${prefix}-${span}`;
  });
});

const starts = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
] as const;

type STARTS = keyof { [key in typeof starts[number]]: string };

const START: {
  [key: string]: string;
} = {};

const STARTS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

starts.forEach((start) => {
  const prefix = 'col-start';
  START[start] = `${prefix}-${start}`;

  breakpoints.forEach((breakpoint) => {
    STARTS[breakpoint][start] = `${breakpoint}:${prefix}-${start}`;
  });
});

interface Props {
  span?:
    | SPANS
    | {
        default?: SPANS;
        sm?: SPANS;
        md?: SPANS;
        lg?: SPANS;
        xl?: SPANS;
      };
  start?:
    | STARTS
    | {
        default?: STARTS;
        sm?: STARTS;
        md?: STARTS;
        lg?: STARTS;
        xl?: STARTS;
      };
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Column: React.FC<Props> = ({
  span,
  start,
  className,
  style,
  children,
}) => {
  let computedClass = '';

  if (span) {
    if (typeof span === 'string') {
      computedClass += ` ${SPAN[span]}`;
    } else {
      Object.keys(span).forEach((key) => {
        computedClass += ` ${SPANS[key][span[key]]}`;
      });
    }
  }

  if (start) {
    if (typeof start === 'string') {
      computedClass += ` ${START[start]}`;
    } else {
      Object.keys(start).forEach((key) => {
        computedClass += ` ${STARTS[key][start[key]]}`;
      });
    }
  }

  return (
    <div className={classify([computedClass, className])} style={style}>
      {children}
    </div>
  );
};

export default Column;
