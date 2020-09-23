import * as React from 'react';
import { classify } from '../helpers/classify';
import { BreakpointClasses, breakpoints } from '../helpers/breakpoints';

const directions = ['row', 'row-reverse', 'col', 'col-reverse'] as const;
type DIRECTIONS = keyof { [key in typeof directions[number]]: string };

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
    DIRECTIONS[breakpoint][direction] = `${breakpoint}:${prefix}-${direction}`;
  });
});

const wraps = ['wrap', 'wrap-reverse', 'no-wrap'] as const;
type WRAPS = keyof { [key in typeof wraps[number]]: string };

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
    WRAPS[breakpoint][wrap] = `${breakpoint}:${prefix}-${wrap}`;
  });
});

const xAligns = [
  'start',
  'end',
  'center',
  'between',
  'around',
  'evenly',
] as const;

type X_ALIGNS = keyof { [key in typeof xAligns[number]]: string };

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
    ALIGNS_X[breakpoint][align] = `${breakpoint}:${prefix}-${align}`;
  });
});

const yAligns = ['start', 'end', 'center', 'between', 'stretch'] as const;
type Y_ALIGNS = keyof { [key in typeof yAligns[number]]: string };

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
] as const;

type SPACES = keyof { [key in typeof spaces[number]]: string };

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
    SPACES_Y[breakpoint][space] = `${breakpoint}:${prefix}-${space}`;
  });
});

interface Props {
  direction?:
    | DIRECTIONS
    | {
        default?: DIRECTIONS;
        sm?: DIRECTIONS;
        md?: DIRECTIONS;
        lg?: DIRECTIONS;
        xl?: DIRECTIONS;
      };
  wrap?:
    | WRAPS
    | {
        default?: WRAPS;
        sm?: WRAPS;
        md?: WRAPS;
        lg?: WRAPS;
        xl?: WRAPS;
      };
  alignX?:
    | X_ALIGNS
    | {
        default?: X_ALIGNS;
        sm?: X_ALIGNS;
        md?: X_ALIGNS;
        lg?: X_ALIGNS;
        xl?: X_ALIGNS;
      };
  alignY?:
    | Y_ALIGNS
    | {
        default?: Y_ALIGNS;
        sm?: Y_ALIGNS;
        md?: Y_ALIGNS;
        lg?: Y_ALIGNS;
        xl?: Y_ALIGNS;
      };
  spaceX?:
    | SPACES
    | {
        default?: SPACES;
        sm?: SPACES;
        md?: SPACES;
        lg?: SPACES;
        xl?: SPACES;
      };
  spaceY?:
    | SPACES
    | {
        default?: SPACES;
        sm?: SPACES;
        md?: SPACES;
        lg?: SPACES;
        xl?: SPACES;
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
