import * as React from 'react';

const PADDING = {
  '1': 'p-1',
  '2': 'p-2',
  '3': 'p-3',
  '4': 'p-4',
  '5': 'p-5',
  '6': 'p-6',
  '8': 'p-8',
  '10': 'p-10',
  '12': 'p-12',
  '16': 'p-16',
  '20': 'p-20',
  '24': 'p-24',
  '32': 'p-32',
  '40': 'p-40',
  '48': 'p-48',
  '56': 'p-56',
  '64': 'p-64',
};

const PADDING_X = {
  '1': 'px-1',
  '2': 'px-2',
  '3': 'px-3',
  '4': 'px-4',
  '5': 'px-5',
  '6': 'px-6',
  '8': 'px-8',
  '10': 'px-10',
  '12': 'px-12',
  '16': 'px-16',
  '20': 'px-20',
  '24': 'px-24',
  '32': 'px-32',
  '40': 'px-40',
  '48': 'px-48',
  '56': 'px-56',
  '64': 'px-64',
};

const PADDING_Y = {
  '1': 'py-1',
  '2': 'py-2',
  '3': 'py-3',
  '4': 'py-4',
  '5': 'py-5',
  '6': 'py-6',
  '8': 'py-8',
  '10': 'py-10',
  '12': 'py-12',
  '16': 'py-16',
  '20': 'py-20',
  '24': 'py-24',
  '32': 'py-32',
  '40': 'py-40',
  '48': 'py-48',
  '56': 'py-56',
  '64': 'py-64',
};

const MARGIN = {
  '1': 'm-1',
  '2': 'm-2',
  '3': 'm-3',
  '4': 'm-4',
  '5': 'm-5',
  '6': 'm-6',
  '8': 'm-8',
  '10': 'm-10',
  '12': 'm-12',
  '16': 'm-16',
  '20': 'm-20',
  '24': 'm-24',
  '32': 'm-32',
  '40': 'm-40',
  '48': 'm-48',
  '56': 'm-56',
  '64': 'm-64',
};

const MARGIN_X = {
  '1': 'mx-1',
  '2': 'mx-2',
  '3': 'mx-3',
  '4': 'mx-4',
  '5': 'mx-5',
  '6': 'mx-6',
  '8': 'mx-8',
  '10': 'mx-10',
  '12': 'mx-12',
  '16': 'mx-16',
  '20': 'mx-20',
  '24': 'mx-24',
  '32': 'mx-32',
  '40': 'mx-40',
  '48': 'mx-48',
  '56': 'mx-56',
  '64': 'mx-64',
};

const MARGIN_Y = {
  '1': 'my-1',
  '2': 'my-2',
  '3': 'my-3',
  '4': 'my-4',
  '5': 'my-5',
  '6': 'my-6',
  '8': 'my-8',
  '10': 'my-10',
  '12': 'my-12',
  '16': 'my-16',
  '20': 'my-20',
  '24': 'my-24',
  '32': 'my-32',
  '40': 'my-40',
  '48': 'my-48',
  '56': 'my-56',
  '64': 'my-64',
};

interface Props {
  padding?: keyof typeof PADDING;
  paddingX?: keyof typeof PADDING_X;
  paddingY?: keyof typeof PADDING_Y;
  margin?: keyof typeof MARGIN;
  marginX?: keyof typeof MARGIN_X;
  marginY?: keyof typeof MARGIN_Y;
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Spacing: React.FC<Props> = ({
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
  className,
  children,
}) => {
  let computedClass = '';

  if (padding) {
    computedClass += ` ${PADDING[padding]}`;
  }

  if (paddingX) {
    computedClass += ` ${PADDING_X[paddingX]}`;
  }

  if (paddingY) {
    computedClass += ` ${PADDING_Y[paddingY]}`;
  }

  if (margin) {
    computedClass += ` ${MARGIN[margin]}`;
  }

  if (marginX) {
    computedClass += ` ${MARGIN_X[marginX]}`;
  }

  if (marginY) {
    computedClass += ` ${MARGIN_Y[marginY]}`;
  }

  return <div className={`${computedClass} ${className}`}>{children}</div>;
};

export default Spacing;
