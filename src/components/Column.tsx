import * as React from 'react';
import { classify } from '../helpers/classify';

import {
  BreakpointClasses,
  breakpoints,
  defaultBreakpoints,
} from '../helpers/breakpoints';

const spans = Array(12)
  .fill(0)
  .map((_, i) => String(i + 1));

const SPAN: {
  [key: string]: string;
} = {};

const SPANS: BreakpointClasses = { ...defaultBreakpoints };

spans.forEach((span) => {
  const prefix = 'col-span';
  SPAN[span] = `${prefix}-${span}`;

  breakpoints.forEach((breakpoint) => {
    if (!SPANS[breakpoint]) {
      SPANS[breakpoint] = {};
    }

    SPANS[breakpoint][span] = `${breakpoint}:${prefix}-${span}`;
  });
});

const starts = Array(13)
  .fill(0)
  .map((_, i) => String(i + 1));

const START: {
  [key: string]: string;
} = {};

const STARTS: BreakpointClasses = { ...defaultBreakpoints };

starts.forEach((start) => {
  const prefix = 'col-start';
  START[start] = `${prefix}-${start}`;

  breakpoints.forEach((breakpoint) => {
    if (!STARTS[breakpoint]) {
      STARTS[breakpoint] = {};
    }

    STARTS[breakpoint][start] = `${breakpoint}:${prefix}-${start}`;
  });
});

interface Props {
  span:
    | keyof typeof SPAN
    | {
        default?: keyof typeof SPANS.default;
        sm?: keyof typeof SPANS.sm;
        md?: keyof typeof SPANS.md;
        lg?: keyof typeof SPANS.lg;
        xl?: keyof typeof SPANS.xl;
      };
  start?:
    | keyof typeof START
    | {
        default?: keyof typeof STARTS.default;
        sm?: keyof typeof STARTS.sm;
        md?: keyof typeof STARTS.md;
        lg?: keyof typeof STARTS.lg;
        xl?: keyof typeof STARTS.xl;
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
