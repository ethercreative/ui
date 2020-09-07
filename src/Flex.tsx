import * as React from 'react';
import { classify } from './helpers/classify';

const DIRECTION = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse',
};

const WRAP = {
  wrap: 'flex-wrap',
  'wrap-reverse': 'flex-wrap-reverse',
  'no-wrap': 'flex-no-wrap',
};

const ALIGN_X = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const ALIGN_Y = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  base: 'items-between',
  stretch: 'items-stretch',
};

const SPACE_X = {
  '1': 'space-x-1',
  '2': 'space-x-2',
  '3': 'space-x-3',
  '4': 'space-x-4',
  '5': 'space-x-5',
  '6': 'space-x-6',
  '8': 'space-x-8',
  '10': 'space-x-10',
  '12': 'space-x-12',
  '16': 'space-x-16',
  '20': 'space-x-20',
  '24': 'space-x-24',
  '32': 'space-x-32',
  '40': 'space-x-40',
  '48': 'space-x-48',
  '56': 'space-x-56',
  '64': 'space-x-64',
};

const SPACE_Y = {
  '1': 'space-y-1',
  '2': 'space-y-2',
  '3': 'space-y-3',
  '4': 'space-y-4',
  '5': 'space-y-5',
  '6': 'space-y-6',
  '8': 'space-y-8',
  '10': 'space-y-10',
  '12': 'space-y-12',
  '16': 'space-y-16',
  '20': 'space-y-20',
  '24': 'space-y-24',
  '32': 'space-y-32',
  '40': 'space-y-40',
  '48': 'space-y-48',
  '56': 'space-y-56',
  '64': 'space-y-64',
};

interface Props {
  direction?: keyof typeof DIRECTION;
  wrap?: keyof typeof WRAP;
  alignX?: keyof typeof ALIGN_X;
  alignY?: keyof typeof ALIGN_Y;
  spaceX?: keyof typeof SPACE_X;
  spaceY?: keyof typeof SPACE_Y;
  className?: React.HTMLAttributes<HTMLUListElement>['className'];
  style?: React.HTMLAttributes<HTMLUListElement>['style'];
}

const Flex: React.FC<Props> = ({
  direction,
  wrap,
  alignX,
  alignY,
  spaceX,
  spaceY,
  className,
  style,
  children,
}) => {
  let computedClass = 'flex';

  if (direction) {
    computedClass += ` ${DIRECTION[direction]}`;
  }

  if (wrap) {
    computedClass += ` ${WRAP[wrap]}`;
  }

  if (alignX) {
    computedClass += ` ${ALIGN_X[alignX]}`;
  }

  if (alignY) {
    computedClass += ` ${ALIGN_Y[alignY]}`;
  }

  if (spaceX) {
    computedClass += ` ${SPACE_X[spaceX]}`;
  }

  if (spaceY) {
    computedClass += ` ${SPACE_Y[spaceY]}`;
  }

  return (
    <div className={classify([computedClass, className])} style={style}>
      {children}
    </div>
  );
};

export default Flex;
