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

const PADDING_LEFT = {
  '1': 'pl-1',
  '2': 'pl-2',
  '3': 'pl-3',
  '4': 'pl-4',
  '5': 'pl-5',
  '6': 'pl-6',
  '8': 'pl-8',
  '10': 'pl-10',
  '12': 'pl-12',
  '16': 'pl-16',
  '20': 'pl-20',
  '24': 'pl-24',
  '32': 'pl-32',
  '40': 'pl-40',
  '48': 'pl-48',
  '56': 'pl-56',
  '64': 'pl-64',
};

const PADDING_RIGHT = {
  '1': 'pr-1',
  '2': 'pr-2',
  '3': 'pr-3',
  '4': 'pr-4',
  '5': 'pr-5',
  '6': 'pr-6',
  '8': 'pr-8',
  '10': 'pr-10',
  '12': 'pr-12',
  '16': 'pr-16',
  '20': 'pr-20',
  '24': 'pr-24',
  '32': 'pr-32',
  '40': 'pr-40',
  '48': 'pr-48',
  '56': 'pr-56',
  '64': 'pr-64',
};

const PADDING_TOP = {
  '1': 'pt-1',
  '2': 'pt-2',
  '3': 'pt-3',
  '4': 'pt-4',
  '5': 'pt-5',
  '6': 'pt-6',
  '8': 'pt-8',
  '10': 'pt-10',
  '12': 'pt-12',
  '16': 'pt-16',
  '20': 'pt-20',
  '24': 'pt-24',
  '32': 'pt-32',
  '40': 'pt-40',
  '48': 'pt-48',
  '56': 'pt-56',
  '64': 'pt-64',
};

const PADDING_BOTTOM = {
  '1': 'pb-1',
  '2': 'pb-2',
  '3': 'pb-3',
  '4': 'pb-4',
  '5': 'pb-5',
  '6': 'pb-6',
  '8': 'pb-8',
  '10': 'pb-10',
  '12': 'pb-12',
  '16': 'pb-16',
  '20': 'pb-20',
  '24': 'pb-24',
  '32': 'pb-32',
  '40': 'pb-40',
  '48': 'pb-48',
  '56': 'pb-56',
  '64': 'pb-64',
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
  '-1': '-m-1',
  '-2': '-m-2',
  '-3': '-m-3',
  '-4': '-m-4',
  '-5': '-m-5',
  '-6': '-m-6',
  '-8': '-m-8',
  '-10': '-m-10',
  '-12': '-m-12',
  '-16': '-m-16',
  '-20': '-m-20',
  '-24': '-m-24',
  '-32': '-m-32',
  '-40': '-m-40',
  '-48': '-m-48',
  '-56': '-m-56',
  '-64': '-m-64',
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
  '-1': '-mx-1',
  '-2': '-mx-2',
  '-3': '-mx-3',
  '-4': '-mx-4',
  '-5': '-mx-5',
  '-6': '-mx-6',
  '-8': '-mx-8',
  '-10': '-mx-10',
  '-12': '-mx-12',
  '-16': '-mx-16',
  '-20': '-mx-20',
  '-24': '-mx-24',
  '-32': '-mx-32',
  '-40': '-mx-40',
  '-48': '-mx-48',
  '-56': '-mx-56',
  '-64': '-mx-64',
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
  '-1': '-my-1',
  '-2': '-my-2',
  '-3': '-my-3',
  '-4': '-my-4',
  '-5': '-my-5',
  '-6': '-my-6',
  '-8': '-my-8',
  '-10': '-my-10',
  '-12': '-my-12',
  '-16': '-my-16',
  '-20': '-my-20',
  '-24': '-my-24',
  '-32': '-my-32',
  '-40': '-my-40',
  '-48': '-my-48',
  '-56': '-my-56',
  '-64': '-my-64',
};

const MARGIN_LEFT = {
  '1': 'ml-1',
  '2': 'ml-2',
  '3': 'ml-3',
  '4': 'ml-4',
  '5': 'ml-5',
  '6': 'ml-6',
  '8': 'ml-8',
  '10': 'ml-10',
  '12': 'ml-12',
  '16': 'ml-16',
  '20': 'ml-20',
  '24': 'ml-24',
  '32': 'ml-32',
  '40': 'ml-40',
  '48': 'ml-48',
  '56': 'ml-56',
  '64': 'ml-64',
  '-1': '-ml-1',
  '-2': '-ml-2',
  '-3': '-ml-3',
  '-4': '-ml-4',
  '-5': '-ml-5',
  '-6': '-ml-6',
  '-8': '-ml-8',
  '-10': '-ml-10',
  '-12': '-ml-12',
  '-16': '-ml-16',
  '-20': '-ml-20',
  '-24': '-ml-24',
  '-32': '-ml-32',
  '-40': '-ml-40',
  '-48': '-ml-48',
  '-56': '-ml-56',
  '-64': '-ml-64',
};

const MARGIN_RIGHT = {
  '1': 'mr-1',
  '2': 'mr-2',
  '3': 'mr-3',
  '4': 'mr-4',
  '5': 'mr-5',
  '6': 'mr-6',
  '8': 'mr-8',
  '10': 'mr-10',
  '12': 'mr-12',
  '16': 'mr-16',
  '20': 'mr-20',
  '24': 'mr-24',
  '32': 'mr-32',
  '40': 'mr-40',
  '48': 'mr-48',
  '56': 'mr-56',
  '64': 'mr-64',
  '-1': '-mr-1',
  '-2': '-mr-2',
  '-3': '-mr-3',
  '-4': '-mr-4',
  '-5': '-mr-5',
  '-6': '-mr-6',
  '-8': '-mr-8',
  '-10': '-mr-10',
  '-12': '-mr-12',
  '-16': '-mr-16',
  '-20': '-mr-20',
  '-24': '-mr-24',
  '-32': '-mr-32',
  '-40': '-mr-40',
  '-48': '-mr-48',
  '-56': '-mr-56',
  '-64': '-mr-64',
};

const MARGIN_TOP = {
  '1': 'mt-1',
  '2': 'mt-2',
  '3': 'mt-3',
  '4': 'mt-4',
  '5': 'mt-5',
  '6': 'mt-6',
  '8': 'mt-8',
  '10': 'mt-10',
  '12': 'mt-12',
  '16': 'mt-16',
  '20': 'mt-20',
  '24': 'mt-24',
  '32': 'mt-32',
  '40': 'mt-40',
  '48': 'mt-48',
  '56': 'mt-56',
  '64': 'mt-64',
  '-1': '-mt-1',
  '-2': '-mt-2',
  '-3': '-mt-3',
  '-4': '-mt-4',
  '-5': '-mt-5',
  '-6': '-mt-6',
  '-8': '-mt-8',
  '-10': '-mt-10',
  '-12': '-mt-12',
  '-16': '-mt-16',
  '-20': '-mt-20',
  '-24': '-mt-24',
  '-32': '-mt-32',
  '-40': '-mt-40',
  '-48': '-mt-48',
  '-56': '-mt-56',
  '-64': '-mt-64',
};

const MARGIN_BOTTOM = {
  '1': 'mb-1',
  '2': 'mb-2',
  '3': 'mb-3',
  '4': 'mb-4',
  '5': 'mb-5',
  '6': 'mb-6',
  '8': 'mb-8',
  '10': 'mb-10',
  '12': 'mb-12',
  '16': 'mb-16',
  '20': 'mb-20',
  '24': 'mb-24',
  '32': 'mb-32',
  '40': 'mb-40',
  '48': 'mb-48',
  '56': 'mb-56',
  '64': 'mb-64',
  '-1': '-mb-1',
  '-2': '-mb-2',
  '-3': '-mb-3',
  '-4': '-mb-4',
  '-5': '-mb-5',
  '-6': '-mb-6',
  '-8': '-mb-8',
  '-10': '-mb-10',
  '-12': '-mb-12',
  '-16': '-mb-16',
  '-20': '-mb-20',
  '-24': '-mb-24',
  '-32': '-mb-32',
  '-40': '-mb-40',
  '-48': '-mb-48',
  '-56': '-mb-56',
  '-64': '-mb-64',
};

interface Props {
  padding?: keyof typeof PADDING;
  paddingLeft?: keyof typeof PADDING_LEFT;
  paddingRight?: keyof typeof PADDING_RIGHT;
  paddingTop?: keyof typeof PADDING_TOP;
  paddingBottom?: keyof typeof PADDING_BOTTOM;
  paddingX?: keyof typeof PADDING_X;
  paddingY?: keyof typeof PADDING_Y;
  margin?: keyof typeof MARGIN;
  marginLeft?: keyof typeof MARGIN_LEFT;
  marginRight?: keyof typeof MARGIN_RIGHT;
  marginTop?: keyof typeof MARGIN_TOP;
  marginBottom?: keyof typeof MARGIN_BOTTOM;
  marginX?: keyof typeof MARGIN_X;
  marginY?: keyof typeof MARGIN_Y;
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Spacing: React.FC<Props> = ({
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  paddingX,
  paddingY,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  marginX,
  marginY,
  className,
  children,
}) => {
  let computedClass = '';

  if (padding) {
    computedClass += ` ${PADDING[padding]}`;
  }

  if (paddingLeft) {
    computedClass += ` ${PADDING_LEFT[paddingLeft]}`;
  }

  if (paddingRight) {
    computedClass += ` ${PADDING_RIGHT[paddingRight]}`;
  }

  if (paddingTop) {
    computedClass += ` ${PADDING_TOP[paddingTop]}`;
  }

  if (paddingBottom) {
    computedClass += ` ${PADDING_BOTTOM[paddingBottom]}`;
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

  if (marginLeft) {
    computedClass += ` ${MARGIN_LEFT[marginLeft]}`;
  }

  if (marginRight) {
    computedClass += ` ${MARGIN_RIGHT[marginRight]}`;
  }

  if (marginTop) {
    computedClass += ` ${MARGIN_TOP[marginTop]}`;
  }

  if (marginBottom) {
    computedClass += ` ${MARGIN_BOTTOM[marginBottom]}`;
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
