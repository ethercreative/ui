import * as React from 'react';
import { classify } from '../helpers/classify';
import { BreakpointClasses, breakpoints } from '../helpers/breakpoints';

const directions = ['row', 'row-reverse', 'col', 'col-reverse'];

const DIRECTION: {
  [key: string]: string;
} = {};

const DIRECTIONS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

directions.forEach((direction) => {
  const prefix = 'flex';
  DIRECTION[direction] = `${prefix}-${direction}`;

  breakpoints.forEach((breakpoint) => {
    if (!DIRECTIONS[breakpoint]) {
      DIRECTIONS[breakpoint] = {};
    }

    DIRECTIONS[breakpoint][direction] = `${breakpoint}:${prefix}-${direction}`;
  });
});

const wraps = ['wrap', 'wrap-reverse', 'no-wrap'];

const WRAP: {
  [key: string]: string;
} = {};

const WRAPS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

wraps.forEach((wrap) => {
  const prefix = 'flex';
  WRAP[wrap] = `${prefix}-${wrap}`;

  breakpoints.forEach((breakpoint) => {
    if (!WRAPS[breakpoint]) {
      WRAPS[breakpoint] = {};
    }

    WRAPS[breakpoint][wrap] = `${breakpoint}:${prefix}-${wrap}`;
  });
});

const xAligns = ['start', 'end', 'center', 'between', 'around', 'evenly'];

const ALIGN_X: {
  [key: string]: string;
} = {};

const ALIGNS_X: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

xAligns.forEach((align) => {
  const prefix = 'justify';
  ALIGN_X[align] = `${prefix}-${align}`;

  breakpoints.forEach((breakpoint) => {
    if (!ALIGNS_X[breakpoint]) {
      ALIGNS_X[breakpoint] = {};
    }

    ALIGNS_X[breakpoint][align] = `${breakpoint}:${prefix}-${align}`;
  });
});

const yAligns = ['start', 'end', 'center', 'between', 'stretch'];

const ALIGN_Y: {
  [key: string]: string;
} = {};

const ALIGNS_Y: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

yAligns.forEach((align) => {
  const prefix = 'items';
  ALIGN_Y[align] = `${prefix}-${align}`;

  breakpoints.forEach((breakpoint) => {
    if (!ALIGNS_Y[breakpoint]) {
      ALIGNS_Y[breakpoint] = {};
    }

    ALIGNS_Y[breakpoint][align] = `${breakpoint}:${prefix}-${align}`;
  });
});

const spaces = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '8',
  '10',
  '12',
  '16',
  '20',
  '24',
  '32',
  '40',
  '48',
  '56',
  '64',
];

const SPACE_X: {
  [key: string]: string;
} = {};

const SPACES_X: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

spaces.forEach((space) => {
  const prefix = 'space-x';
  SPACE_X[space] = `${prefix}-${space}`;

  breakpoints.forEach((breakpoint) => {
    if (!SPACE_X[breakpoint]) {
      SPACES_X[breakpoint] = {};
    }

    SPACES_X[breakpoint][space] = `${breakpoint}:${prefix}-${space}`;
  });
});

const SPACE_Y: {
  [key: string]: string;
} = {};

const SPACES_Y: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

spaces.forEach((space) => {
  const prefix = 'space-y';
  SPACE_Y[space] = `${prefix}-${space}`;

  breakpoints.forEach((breakpoint) => {
    if (!SPACES_Y[breakpoint]) {
      SPACES_Y[breakpoint] = {};
    }

    SPACES_Y[breakpoint][space] = `${breakpoint}:${prefix}-${space}`;
  });
});

interface Props {
  direction?:
    | keyof typeof DIRECTION
    | {
        default?: keyof typeof DIRECTIONS.default;
        sm?: keyof typeof DIRECTIONS.sm;
        md?: keyof typeof DIRECTIONS.md;
        lg?: keyof typeof DIRECTIONS.lg;
        xl?: keyof typeof DIRECTIONS.xl;
      };
  wrap?:
    | keyof typeof WRAP
    | {
        default?: keyof typeof WRAPS.default;
        sm?: keyof typeof WRAPS.sm;
        md?: keyof typeof WRAPS.md;
        lg?: keyof typeof WRAPS.lg;
        xl?: keyof typeof WRAPS.xl;
      };
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
    if (typeof direction === 'string') {
      computedClass += ` ${DIRECTION[direction]}`;
    } else {
      Object.keys(direction).forEach((key) => {
        computedClass += ` ${DIRECTIONS[key][direction[key]]}`;
      });
    }
  }

  if (wrap) {
    if (typeof wrap === 'string') {
      computedClass += ` ${WRAP[wrap]}`;
    } else {
      Object.keys(wrap).forEach((key) => {
        computedClass += ` ${WRAPS[key][wrap[key]]}`;
      });
    }
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
