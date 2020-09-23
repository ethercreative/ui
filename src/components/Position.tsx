import * as React from 'react';
import { classify } from '../helpers/classify';
import { BreakpointClasses, breakpoints } from '../helpers/breakpoints';

const modes = ['absolute', 'relative', 'fixed', 'sticky'] as const;
type MODES = keyof { [key in typeof modes[number]]: string };

const MODE: {
  [key: string]: string;
} = {};

const MODES: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

modes.forEach((mode) => {
  MODE[mode] = mode;

  breakpoints.forEach((breakpoint) => {
    MODES[breakpoint][mode] = `${breakpoint}:${mode}`;
  });
});

const insets = ['auto', '0'] as const;
type INSETS = keyof { [key in typeof insets[number]]: string };

const INSET: {
  [key: string]: string;
} = {};

const INSETS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

insets.forEach((inset) => {
  const prefix = 'inset';
  INSET[inset] = `${prefix}-${inset}`;

  breakpoints.forEach((breakpoint) => {
    INSETS[breakpoint][inset] = `${breakpoint}:${prefix}-${inset}`;
  });
});

const INSET_X: {
  [key: string]: string;
} = {};

const INSETS_X: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

insets.forEach((inset) => {
  const prefix = 'inset-x';
  INSET_X[inset] = `${prefix}-${inset}`;

  breakpoints.forEach((breakpoint) => {
    INSETS_X[breakpoint][inset] = `${breakpoint}:${prefix}-${inset}`;
  });
});

const INSET_Y: {
  [key: string]: string;
} = {};

const INSETS_Y: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

insets.forEach((inset) => {
  const prefix = 'inset-y';
  INSET_Y[inset] = `${prefix}-${inset}`;

  breakpoints.forEach((breakpoint) => {
    INSETS_Y[breakpoint][inset] = `${breakpoint}:${prefix}-${inset}`;
  });
});

const LEFT: {
  [key: string]: string;
} = {};

const LEFTS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

insets.forEach((inset) => {
  const prefix = 'left';
  LEFT[inset] = `${prefix}-${inset}`;

  breakpoints.forEach((breakpoint) => {
    LEFTS[breakpoint][inset] = `${breakpoint}:${prefix}-${inset}`;
  });
});

const RIGHT: {
  [key: string]: string;
} = {};

const RIGHTS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

insets.forEach((inset) => {
  const prefix = 'right';
  RIGHT[inset] = `${prefix}-${inset}`;

  breakpoints.forEach((breakpoint) => {
    RIGHTS[breakpoint][inset] = `${breakpoint}:${prefix}-${inset}`;
  });
});

const TOP: {
  [key: string]: string;
} = {};

const TOPS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

insets.forEach((inset) => {
  const prefix = 'top';
  TOP[inset] = `${prefix}-${inset}`;

  breakpoints.forEach((breakpoint) => {
    TOPS[breakpoint][inset] = `${breakpoint}:${prefix}-${inset}`;
  });
});

const BOTTOM: {
  [key: string]: string;
} = {};

const BOTTOMS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

insets.forEach((inset) => {
  const prefix = 'bottom';
  BOTTOM[inset] = `${prefix}-${inset}`;

  breakpoints.forEach((breakpoint) => {
    BOTTOMS[breakpoint][inset] = `${breakpoint}:${prefix}-${inset}`;
  });
});

interface Props {
  mode:
    | MODES
    | {
        default?: MODES;
        sm?: MODES;
        md?: MODES;
        lg?: MODES;
        xl?: MODES;
      };
  inset?:
    | INSETS
    | {
        default?: INSETS;
        sm?: INSETS;
        md?: INSETS;
        lg?: INSETS;
        xl?: INSETS;
      };
  insetX?:
    | INSETS
    | {
        default?: INSETS;
        sm?: INSETS;
        md?: INSETS;
        lg?: INSETS;
        xl?: INSETS;
      };
  insetY?:
    | INSETS
    | {
        default?: INSETS;
        sm?: INSETS;
        md?: INSETS;
        lg?: INSETS;
        xl?: INSETS;
      };
  left?:
    | INSETS
    | {
        default?: INSETS;
        sm?: INSETS;
        md?: INSETS;
        lg?: INSETS;
        xl?: INSETS;
      };
  right?:
    | INSETS
    | {
        default?: INSETS;
        sm?: INSETS;
        md?: INSETS;
        lg?: INSETS;
        xl?: INSETS;
      };
  top?:
    | INSETS
    | {
        default?: INSETS;
        sm?: INSETS;
        md?: INSETS;
        lg?: INSETS;
        xl?: INSETS;
      };
  bottom?:
    | INSETS
    | {
        default?: INSETS;
        sm?: INSETS;
        md?: INSETS;
        lg?: INSETS;
        xl?: INSETS;
      };
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
    if (typeof mode === 'string') {
      computedClass += ` ${MODE[mode]}`;
    } else {
      Object.keys(mode).forEach((key) => {
        computedClass += ` ${MODES[key][mode[key]]}`;
      });
    }
  }

  if (inset) {
    if (typeof inset === 'string') {
      computedClass += ` ${INSET[inset]}`;
    } else {
      Object.keys(inset).forEach((key) => {
        computedClass += ` ${INSETS[key][inset[key]]}`;
      });
    }
  }

  if (insetX) {
    if (typeof insetX === 'string') {
      computedClass += ` ${INSET_X[insetX]}`;
    } else {
      Object.keys(insetX).forEach((key) => {
        computedClass += ` ${INSETS_X[key][insetX[key]]}`;
      });
    }
  }

  if (insetY) {
    if (typeof insetY === 'string') {
      computedClass += ` ${INSET_Y[insetY]}`;
    } else {
      Object.keys(insetY).forEach((key) => {
        computedClass += ` ${INSETS_Y[key][insetY[key]]}`;
      });
    }
  }

  if (left) {
    if (typeof left === 'string') {
      computedClass += ` ${LEFT[left]}`;
    } else {
      Object.keys(left).forEach((key) => {
        computedClass += ` ${LEFTS[key][left[key]]}`;
      });
    }
  }

  if (right) {
    if (typeof right === 'string') {
      computedClass += ` ${RIGHT[right]}`;
    } else {
      Object.keys(right).forEach((key) => {
        computedClass += ` ${RIGHTS[key][right[key]]}`;
      });
    }
  }

  if (top) {
    if (typeof top === 'string') {
      computedClass += ` ${TOP[top]}`;
    } else {
      Object.keys(top).forEach((key) => {
        computedClass += ` ${TOPS[key][top[key]]}`;
      });
    }
  }

  if (bottom) {
    if (typeof bottom === 'string') {
      computedClass += ` ${BOTTOM[bottom]}`;
    } else {
      Object.keys(bottom).forEach((key) => {
        computedClass += ` ${BOTTOMS[key][bottom[key]]}`;
      });
    }
  }

  return (
    <div className={classify([computedClass, className])} style={style}>
      {children}
    </div>
  );
};

export default Position;
