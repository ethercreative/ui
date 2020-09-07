import * as React from 'react';
import { classify } from './helpers/classify';

const SPAN = {
  '1': 'col-span-1',
  '2': 'col-span-2',
  '3': 'col-span-3',
  '4': 'col-span-4',
  '5': 'col-span-5',
  '6': 'col-span-6',
  '7': 'col-span-7',
  '8': 'col-span-8',
  '9': 'col-span-9',
  '10': 'col-span-10',
  '11': 'col-span-11',
  '12': 'col-span-12',
};

const SPANS = {
  default: SPAN,
  sm: {
    '1': 'sm:col-span-1',
    '2': 'sm:col-span-2',
    '3': 'sm:col-span-3',
    '4': 'sm:col-span-4',
    '5': 'sm:col-span-5',
    '6': 'sm:col-span-6',
    '7': 'sm:col-span-7',
    '8': 'sm:col-span-8',
    '9': 'sm:col-span-9',
    '10': 'sm:col-span-10',
    '11': 'sm:col-span-11',
    '12': 'sm:col-span-12',
  },
  md: {
    '1': 'md:col-span-1',
    '2': 'md:col-span-2',
    '3': 'md:col-span-3',
    '4': 'md:col-span-4',
    '5': 'md:col-span-5',
    '6': 'md:col-span-6',
    '7': 'md:col-span-7',
    '8': 'md:col-span-8',
    '9': 'md:col-span-9',
    '10': 'md:col-span-10',
    '11': 'md:col-span-11',
    '12': 'md:col-span-12',
  },
  lg: {
    '1': 'lg:col-span-1',
    '2': 'lg:col-span-2',
    '3': 'lg:col-span-3',
    '4': 'lg:col-span-4',
    '5': 'lg:col-span-5',
    '6': 'lg:col-span-6',
    '7': 'lg:col-span-7',
    '8': 'lg:col-span-8',
    '9': 'lg:col-span-9',
    '10': 'lg:col-span-10',
    '11': 'lg:col-span-11',
    '12': 'lg:col-span-12',
  },
  xl: {
    '1': 'xl:col-span-1',
    '2': 'xl:col-span-2',
    '3': 'xl:col-span-3',
    '4': 'xl:col-span-4',
    '5': 'xl:col-span-5',
    '6': 'xl:col-span-6',
    '7': 'xl:col-span-7',
    '8': 'xl:col-span-8',
    '9': 'xl:col-span-9',
    '10': 'xl:col-span-10',
    '11': 'xl:col-span-11',
    '12': 'xl:col-span-12',
  },
};

const START = {
  '1': 'col-start-1',
  '2': 'col-start-2',
  '3': 'col-start-3',
  '4': 'col-start-4',
  '5': 'col-start-5',
  '6': 'col-start-6',
  '7': 'col-start-7',
  '8': 'col-start-8',
  '9': 'col-start-9',
  '10': 'col-start-10',
  '11': 'col-start-11',
  '12': 'col-start-12',
  '13': 'col-start-13',
};

const STARTS = {
  default: {
    '1': 'col-start-1',
    '2': 'col-start-2',
    '3': 'col-start-3',
    '4': 'col-start-4',
    '5': 'col-start-5',
    '6': 'col-start-6',
    '7': 'col-start-7',
    '8': 'col-start-8',
    '9': 'col-start-9',
    '10': 'col-start-10',
    '11': 'col-start-11',
    '12': 'col-start-12',
    '13': 'col-start-13',
  },
  sm: {
    '1': 'sm:col-start-1',
    '2': 'sm:col-start-2',
    '3': 'sm:col-start-3',
    '4': 'sm:col-start-4',
    '5': 'sm:col-start-5',
    '6': 'sm:col-start-6',
    '7': 'sm:col-start-7',
    '8': 'sm:col-start-8',
    '9': 'sm:col-start-9',
    '10': 'sm:col-start-10',
    '11': 'sm:col-start-11',
    '12': 'sm:col-start-12',
    '13': 'sm:col-start-13',
  },
  md: {
    '1': 'md:col-start-1',
    '2': 'md:col-start-2',
    '3': 'md:col-start-3',
    '4': 'md:col-start-4',
    '5': 'md:col-start-5',
    '6': 'md:col-start-6',
    '7': 'md:col-start-7',
    '8': 'md:col-start-8',
    '9': 'md:col-start-9',
    '10': 'md:col-start-10',
    '11': 'md:col-start-11',
    '12': 'md:col-start-12',
    '13': 'md:col-start-13',
  },
  lg: {
    '1': 'lg:col-start-1',
    '2': 'lg:col-start-2',
    '3': 'lg:col-start-3',
    '4': 'lg:col-start-4',
    '5': 'lg:col-start-5',
    '6': 'lg:col-start-6',
    '7': 'lg:col-start-7',
    '8': 'lg:col-start-8',
    '9': 'lg:col-start-9',
    '10': 'lg:col-start-10',
    '11': 'lg:col-start-11',
    '12': 'lg:col-start-12',
    '13': 'lg:col-start-13',
  },
  xl: {
    '1': 'xl:col-start-1',
    '2': 'xl:col-start-2',
    '3': 'xl:col-start-3',
    '4': 'xl:col-start-4',
    '5': 'xl:col-start-5',
    '6': 'xl:col-start-6',
    '7': 'xl:col-start-7',
    '8': 'xl:col-start-8',
    '9': 'xl:col-start-9',
    '10': 'xl:col-start-10',
    '11': 'xl:col-start-11',
    '12': 'xl:col-start-12',
    '13': 'xl:col-start-13',
  },
};

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
