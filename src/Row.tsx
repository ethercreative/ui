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

const START = {
  '1': 'row-start-1',
  '2': 'row-start-2',
  '3': 'row-start-3',
  '4': 'row-start-4',
  '5': 'row-start-5',
  '6': 'row-start-6',
  '7': 'row-start-7',
};

interface Props {
  span?: keyof typeof SPAN;
  start?: keyof typeof START;
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Row: React.FC<Props> = ({ span, start, className, style, children }) => {
  let computedClass = '';

  if (span) {
    computedClass += ` ${SPAN[span]}`;
  }

  if (start) {
    computedClass += ` ${START[start]}`;
  }

  return (
    <div className={classify([computedClass, className])} style={style}>
      {children}
    </div>
  );
};

export default Row;
