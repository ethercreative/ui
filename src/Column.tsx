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

interface Props {
  span?: keyof typeof SPAN;
  start?: keyof typeof START;
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

export default Column;
