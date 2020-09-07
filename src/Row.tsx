import * as React from 'react';
import { classify } from './helpers/classify';

const SPAN = {
  '1': 'row-span-1',
  '2': 'row-span-2',
  '3': 'row-span-3',
  '4': 'row-span-4',
  '5': 'row-span-5',
  '6': 'row-span-6',
};

const SPANS = {
  default: SPAN,
  sm: {
    '1': 'sm:row-span-1',
    '2': 'sm:row-span-2',
    '3': 'sm:row-span-3',
    '4': 'sm:row-span-4',
    '5': 'sm:row-span-5',
    '6': 'sm:row-span-6',
  },
  md: {
    '1': 'md:row-span-1',
    '2': 'md:row-span-2',
    '3': 'md:row-span-3',
    '4': 'md:row-span-4',
    '5': 'md:row-span-5',
    '6': 'md:row-span-6',
  },
  lg: {
    '1': 'lg:row-span-1',
    '2': 'lg:row-span-2',
    '3': 'lg:row-span-3',
    '4': 'lg:row-span-4',
    '5': 'lg:row-span-5',
    '6': 'lg:row-span-6',
  },
  xl: {
    '1': 'xl:row-span-1',
    '2': 'xl:row-span-2',
    '3': 'xl:row-span-3',
    '4': 'xl:row-span-4',
    '5': 'xl:row-span-5',
    '6': 'xl:row-span-6',
  },
};

const START = {
  '1': 'row-start-1',
  '2': 'row-start-2',
  '3': 'row-start-3',
  '4': 'row-start-4',
  '5': 'row-start-5',
  '6': 'row-start-6',
  '7': 'row-start-7',
};

const STARTS = {
  default: START,
  sm: {
    '1': 'sm:row-start-1',
    '2': 'sm:row-start-2',
    '3': 'sm:row-start-3',
    '4': 'sm:row-start-4',
    '5': 'sm:row-start-5',
    '6': 'sm:row-start-6',
    '7': 'sm:row-start-7',
  },
  md: {
    '1': 'md:row-start-1',
    '2': 'md:row-start-2',
    '3': 'md:row-start-3',
    '4': 'md:row-start-4',
    '5': 'md:row-start-5',
    '6': 'md:row-start-6',
    '7': 'md:row-start-7',
  },
  lg: {
    '1': 'lg:row-start-1',
    '2': 'lg:row-start-2',
    '3': 'lg:row-start-3',
    '4': 'lg:row-start-4',
    '5': 'lg:row-start-5',
    '6': 'lg:row-start-6',
    '7': 'lg:row-start-7',
  },
  xl: {
    '1': 'xl:row-start-1',
    '2': 'xl:row-start-2',
    '3': 'xl:row-start-3',
    '4': 'xl:row-start-4',
    '5': 'xl:row-start-5',
    '6': 'xl:row-start-6',
    '7': 'xl:row-start-7',
  },
};

interface Props {
  span?:
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

const Row: React.FC<Props> = ({ span, start, className, style, children }) => {
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

export default Row;
