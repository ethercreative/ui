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

const ALIGNS_X = {
  default: ALIGN_X,
  sm: {
    start: 'sm:justify-start',
    end: 'sm:justify-end',
    center: 'sm:justify-center',
    between: 'sm:justify-between',
    around: 'sm:justify-around',
    evenly: 'sm:justify-evenly',
  },
  md: {
    start: 'md:justify-start',
    end: 'md:justify-end',
    center: 'md:justify-center',
    between: 'md:justify-between',
    around: 'md:justify-around',
    evenly: 'md:justify-evenly',
  },
  lg: {
    start: 'lg:justify-start',
    end: 'lg:justify-end',
    center: 'lg:justify-center',
    between: 'lg:justify-between',
    around: 'lg:justify-around',
    evenly: 'lg:justify-evenly',
  },
  xl: {
    start: 'xl:justify-start',
    end: 'xl:justify-end',
    center: 'xl:justify-center',
    between: 'xl:justify-between',
    around: 'xl:justify-around',
    evenly: 'xl:justify-evenly',
  },
};

const ALIGN_Y = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  base: 'items-between',
  stretch: 'items-stretch',
};

const ALIGNS_Y = {
  default: ALIGN_Y,
  sm: {
    start: 'sm:items-start',
    end: 'sm:items-end',
    center: 'sm:items-center',
    between: 'sm:items-between',
    around: 'sm:items-around',
    evenly: 'sm:items-evenly',
  },
  md: {
    start: 'md:items-start',
    end: 'md:items-end',
    center: 'md:items-center',
    between: 'md:items-between',
    around: 'md:items-around',
    evenly: 'md:items-evenly',
  },
  lg: {
    start: 'lg:items-start',
    end: 'lg:items-end',
    center: 'lg:items-center',
    between: 'lg:items-between',
    around: 'lg:items-around',
    evenly: 'lg:items-evenly',
  },
  xl: {
    start: 'xl:items-start',
    end: 'xl:items-end',
    center: 'xl:items-center',
    between: 'xl:items-between',
    around: 'xl:items-around',
    evenly: 'xl:items-evenly',
  },
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

const SPACES_X = {
  default: SPACE_X,
  sm: {
    '1': 'sm:space-x-1',
    '2': 'sm:space-x-2',
    '3': 'sm:space-x-3',
    '4': 'sm:space-x-4',
    '5': 'sm:space-x-5',
    '6': 'sm:space-x-6',
    '8': 'sm:space-x-8',
    '10': 'sm:space-x-10',
    '12': 'sm:space-x-12',
    '16': 'sm:space-x-16',
    '20': 'sm:space-x-20',
    '24': 'sm:space-x-24',
    '32': 'sm:space-x-32',
    '40': 'sm:space-x-40',
    '48': 'sm:space-x-48',
    '56': 'sm:space-x-56',
    '64': 'sm:space-x-64',
  },
  md: {
    '1': 'md:space-x-1',
    '2': 'md:space-x-2',
    '3': 'md:space-x-3',
    '4': 'md:space-x-4',
    '5': 'md:space-x-5',
    '6': 'md:space-x-6',
    '8': 'md:space-x-8',
    '10': 'md:space-x-10',
    '12': 'md:space-x-12',
    '16': 'md:space-x-16',
    '20': 'md:space-x-20',
    '24': 'md:space-x-24',
    '32': 'md:space-x-32',
    '40': 'md:space-x-40',
    '48': 'md:space-x-48',
    '56': 'md:space-x-56',
    '64': 'md:space-x-64',
  },
  lg: {
    '1': 'lg:space-x-1',
    '2': 'lg:space-x-2',
    '3': 'lg:space-x-3',
    '4': 'lg:space-x-4',
    '5': 'lg:space-x-5',
    '6': 'lg:space-x-6',
    '8': 'lg:space-x-8',
    '10': 'lg:space-x-10',
    '12': 'lg:space-x-12',
    '16': 'lg:space-x-16',
    '20': 'lg:space-x-20',
    '24': 'lg:space-x-24',
    '32': 'lg:space-x-32',
    '40': 'lg:space-x-40',
    '48': 'lg:space-x-48',
    '56': 'lg:space-x-56',
    '64': 'lg:space-x-64',
  },
  xl: {
    '1': 'xl:space-x-1',
    '2': 'xl:space-x-2',
    '3': 'xl:space-x-3',
    '4': 'xl:space-x-4',
    '5': 'xl:space-x-5',
    '6': 'xl:space-x-6',
    '8': 'xl:space-x-8',
    '10': 'xl:space-x-10',
    '12': 'xl:space-x-12',
    '16': 'xl:space-x-16',
    '20': 'xl:space-x-20',
    '24': 'xl:space-x-24',
    '32': 'xl:space-x-32',
    '40': 'xl:space-x-40',
    '48': 'xl:space-x-48',
    '56': 'xl:space-x-56',
    '64': 'xl:space-x-64',
  },
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

const SPACES_Y = {
  default: SPACE_Y,
  sm: {
    '1': 'sm:space-y-1',
    '2': 'sm:space-y-2',
    '3': 'sm:space-y-3',
    '4': 'sm:space-y-4',
    '5': 'sm:space-y-5',
    '6': 'sm:space-y-6',
    '8': 'sm:space-y-8',
    '10': 'sm:space-y-10',
    '12': 'sm:space-y-12',
    '16': 'sm:space-y-16',
    '20': 'sm:space-y-20',
    '24': 'sm:space-y-24',
    '32': 'sm:space-y-32',
    '40': 'sm:space-y-40',
    '48': 'sm:space-y-48',
    '56': 'sm:space-y-56',
    '64': 'sm:space-y-64',
  },
  md: {
    '1': 'md:space-y-1',
    '2': 'md:space-y-2',
    '3': 'md:space-y-3',
    '4': 'md:space-y-4',
    '5': 'md:space-y-5',
    '6': 'md:space-y-6',
    '8': 'md:space-y-8',
    '10': 'md:space-y-10',
    '12': 'md:space-y-12',
    '16': 'md:space-y-16',
    '20': 'md:space-y-20',
    '24': 'md:space-y-24',
    '32': 'md:space-y-32',
    '40': 'md:space-y-40',
    '48': 'md:space-y-48',
    '56': 'md:space-y-56',
    '64': 'md:space-y-64',
  },
  lg: {
    '1': 'lg:space-y-1',
    '2': 'lg:space-y-2',
    '3': 'lg:space-y-3',
    '4': 'lg:space-y-4',
    '5': 'lg:space-y-5',
    '6': 'lg:space-y-6',
    '8': 'lg:space-y-8',
    '10': 'lg:space-y-10',
    '12': 'lg:space-y-12',
    '16': 'lg:space-y-16',
    '20': 'lg:space-y-20',
    '24': 'lg:space-y-24',
    '32': 'lg:space-y-32',
    '40': 'lg:space-y-40',
    '48': 'lg:space-y-48',
    '56': 'lg:space-y-56',
    '64': 'lg:space-y-64',
  },
  xl: {
    '1': 'xl:space-y-1',
    '2': 'xl:space-y-2',
    '3': 'xl:space-y-3',
    '4': 'xl:space-y-4',
    '5': 'xl:space-y-5',
    '6': 'xl:space-y-6',
    '8': 'xl:space-y-8',
    '10': 'xl:space-y-10',
    '12': 'xl:space-y-12',
    '16': 'xl:space-y-16',
    '20': 'xl:space-y-20',
    '24': 'xl:space-y-24',
    '32': 'xl:space-y-32',
    '40': 'xl:space-y-40',
    '48': 'xl:space-y-48',
    '56': 'xl:space-y-56',
    '64': 'xl:space-y-64',
  },
};

interface Props {
  direction?: keyof typeof DIRECTION;
  wrap?: keyof typeof WRAP;
  alignX?:
    | keyof typeof ALIGN_X
    | {
        default?: keyof typeof ALIGNS_X.default;
        sm?: keyof typeof ALIGNS_X.sm;
        md?: keyof typeof ALIGNS_X.md;
        lg?: keyof typeof ALIGNS_X.lg;
        xl?: keyof typeof ALIGNS_X.xl;
      };
  alignY?:
    | keyof typeof ALIGN_Y
    | {
        default?: keyof typeof ALIGNS_Y.default;
        sm?: keyof typeof ALIGNS_Y.sm;
        md?: keyof typeof ALIGNS_Y.md;
        lg?: keyof typeof ALIGNS_Y.lg;
        xl?: keyof typeof ALIGNS_Y.xl;
      };
  spaceX?:
    | keyof typeof SPACE_X
    | {
        default?: keyof typeof SPACES_X.default;
        sm?: keyof typeof SPACES_X.sm;
        md?: keyof typeof SPACES_X.md;
        lg?: keyof typeof SPACES_X.lg;
        xl?: keyof typeof SPACES_X.xl;
      };
  spaceY?:
    | keyof typeof SPACE_Y
    | {
        default?: keyof typeof SPACES_Y.default;
        sm?: keyof typeof SPACES_Y.sm;
        md?: keyof typeof SPACES_Y.md;
        lg?: keyof typeof SPACES_Y.lg;
        xl?: keyof typeof SPACES_Y.xl;
      };
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
    if (typeof alignX === 'string') {
      computedClass += ` ${ALIGN_X[alignX]}`;
    } else {
      Object.keys(alignX).forEach((key) => {
        computedClass += ` ${ALIGNS_X[key][alignX[key]]}`;
      });
    }
  }

  if (alignY) {
    if (typeof alignY === 'string') {
      computedClass += ` ${ALIGN_Y[alignY]}`;
    } else {
      Object.keys(alignY).forEach((key) => {
        computedClass += ` ${ALIGNS_Y[key][alignY[key]]}`;
      });
    }
  }

  if (spaceX) {
    if (typeof spaceX === 'string') {
      computedClass += ` ${SPACE_X[spaceX]}`;
    } else {
      Object.keys(spaceX).forEach((key) => {
        computedClass += ` ${SPACES_X[key][spaceX[key]]}`;
      });
    }
  }

  if (spaceY) {
    if (typeof spaceY === 'string') {
      computedClass += ` ${SPACE_Y[spaceY]}`;
    } else {
      Object.keys(spaceY).forEach((key) => {
        computedClass += ` ${SPACES_Y[key][spaceY[key]]}`;
      });
    }
  }

  return (
    <div className={classify([computedClass, className])} style={style}>
      {children}
    </div>
  );
};

export default Flex;
