import * as React from 'react';

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

interface Props {
  direction?: keyof typeof DIRECTION;
  wrap?: keyof typeof WRAP;
  alignX?: keyof typeof ALIGN_X;
  alignY?: keyof typeof ALIGN_Y;
  className?: React.HTMLAttributes<HTMLUListElement>['className'];
  style?: React.HTMLAttributes<HTMLUListElement>['style'];
}

const Flex: React.FC<Props> = ({
  direction,
  wrap,
  alignX,
  alignY,
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

  return (
    <div className={`${computedClass} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Flex;
