import * as React from 'react';

const MODE = {
  absolute: 'absolute',
  relative: 'relative',
};

const INSET = {
  auto: 'inset-auto',
  '0': 'inset-0',
};

const INSET_X = {
  auto: 'inset-x-auto',
  '0': 'inset-x-0',
};

const INSET_Y = {
  auto: 'inset-y-auto',
  '0': 'inset-y-0',
};

const LEFT = {
  auto: 'left-auto',
  '0': 'left-0',
};

const RIGHT = {
  auto: 'right-auto',
  '0': 'right-0',
};

const TOP = {
  auto: 'top-auto',
  '0': 'top-0',
};

const BOTTOM = {
  auto: 'bottom-auto',
  '0': 'bottom-0',
};

interface Props {
  mode?: keyof typeof MODE;
  inset?: keyof typeof INSET;
  insetX?: keyof typeof INSET_X;
  insetY?: keyof typeof INSET_Y;
  left?: keyof typeof LEFT;
  right?: keyof typeof RIGHT;
  top?: keyof typeof TOP;
  bottom?: keyof typeof BOTTOM;
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Position: React.FC<Props> = ({
  mode,
  inset,
  insetX,
  insetY,
  left,
  right,
  top,
  bottom,
  className,
  style,
  children,
}) => {
  let computedClass = '';

  if (mode) {
    computedClass += ` ${MODE[mode]}`;
  }

  if (inset) {
    computedClass += ` ${INSET[inset]}`;
  }

  if (insetX) {
    computedClass += ` ${INSET_X[insetX]}`;
  }

  if (insetY) {
    computedClass += ` ${INSET_Y[insetY]}`;
  }

  if (left) {
    computedClass += ` ${LEFT[left]}`;
  }

  if (right) {
    computedClass += ` ${RIGHT[right]}`;
  }

  if (top) {
    computedClass += ` ${TOP[too]}`;
  }

  if (bottom) {
    computedClass += ` ${BOTTOM[bottom]}`;
  }

  return (
    <div className={`${computedClass} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Position;
