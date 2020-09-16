import * as React from 'react';
import { classify } from '../helpers/classify';
import { BreakpointClasses, breakpoints } from '../helpers/breakpoints';

const modes = ['absolute', 'relative', 'fixed', 'sticky'];

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
    if (!MODES[breakpoint]) {
      MODES[breakpoint] = {};
    }

    MODES[breakpoint][mode] = `${breakpoint}:${mode}`;
  });
});

const insets = ['auto', '0'];

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
    if (!INSETS[breakpoint]) {
      INSETS[breakpoint] = {};
    }

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
    if (!INSETS_X[breakpoint]) {
      INSETS_X[breakpoint] = {};
    }

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
    if (!INSETS_Y[breakpoint]) {
      INSETS_Y[breakpoint] = {};
    }

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
    if (!LEFTS[breakpoint]) {
      LEFTS[breakpoint] = {};
    }

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
    if (!RIGHTS[breakpoint]) {
      RIGHTS[breakpoint] = {};
    }

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
    if (!TOPS[breakpoint]) {
      TOPS[breakpoint] = {};
    }

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
    if (!BOTTOMS[breakpoint]) {
      BOTTOMS[breakpoint] = {};
    }

    BOTTOMS[breakpoint][inset] = `${breakpoint}:${prefix}-${inset}`;
  });
});

interface Props {
  mode:
    | keyof typeof MODE
    | {
        default?: keyof typeof MODES.default;
        sm?: keyof typeof MODES.sm;
        md?: keyof typeof MODES.md;
        lg?: keyof typeof MODES.lg;
        xl?: keyof typeof MODES.xl;
      };
  inset?:
    | keyof typeof INSET
    | {
        default?: keyof typeof INSETS.default;
        sm?: keyof typeof INSETS.sm;
        md?: keyof typeof INSETS.md;
        lg?: keyof typeof INSETS.lg;
        xl?: keyof typeof INSETS.xl;
      };
  insetX?:
    | keyof typeof INSET_X
    | {
        default?: keyof typeof INSETS_X.default;
        sm?: keyof typeof INSETS_X.sm;
        md?: keyof typeof INSETS_X.md;
        lg?: keyof typeof INSETS_X.lg;
        xl?: keyof typeof INSETS_X.xl;
      };
  insetY?:
    | keyof typeof INSET_Y
    | {
        default?: keyof typeof INSETS_Y.default;
        sm?: keyof typeof INSETS_Y.sm;
        md?: keyof typeof INSETS_Y.md;
        lg?: keyof typeof INSETS_Y.lg;
        xl?: keyof typeof INSETS_Y.xl;
      };
  left?:
    | keyof typeof LEFT
    | {
        default?: keyof typeof LEFTS.default;
        sm?: keyof typeof LEFTS.sm;
        md?: keyof typeof LEFTS.md;
        lg?: keyof typeof LEFTS.lg;
        xl?: keyof typeof LEFTS.xl;
      };
  right?:
    | keyof typeof RIGHT
    | {
        default?: keyof typeof RIGHTS.default;
        sm?: keyof typeof RIGHTS.sm;
        md?: keyof typeof RIGHTS.md;
        lg?: keyof typeof RIGHTS.lg;
        xl?: keyof typeof RIGHTS.xl;
      };
  top?:
    | keyof typeof TOP
    | {
        default?: keyof typeof TOPS.default;
        sm?: keyof typeof TOPS.sm;
        md?: keyof typeof TOPS.md;
        lg?: keyof typeof TOPS.lg;
        xl?: keyof typeof TOPS.xl;
      };
  bottom?:
    | keyof typeof BOTTOM
    | {
        default?: keyof typeof BOTTOMS.default;
        sm?: keyof typeof BOTTOMS.sm;
        md?: keyof typeof BOTTOMS.md;
        lg?: keyof typeof BOTTOMS.lg;
        xl?: keyof typeof BOTTOMS.xl;
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
