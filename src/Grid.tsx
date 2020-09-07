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

interface Props {
  columns?: keyof typeof COLUMN;
  rows?: keyof typeof ROW;
  gap?: keyof typeof GAP;
  gapX?: keyof typeof GAP_X;
  gapY?: keyof typeof GAP_Y;
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
    computedClass += ` ${GAP[gap]}`;
  }

  if (gapX) {
    computedClass += ` ${GAP_X[gapX]}`;
  }

  if (gapY) {
    computedClass += ` ${GAP_Y[gapY]}`;
  }

  return (
    <div className={classify([computedClass, className])} style={style}>
      {children}
    </div>
  );
};

export default Grid;
