import * as React from 'react';
import { classify } from '../helpers/classify';

import {
  BreakpointClasses,
  breakpoints,
  defaultBreakpoints,
} from '../helpers/breakpoints';

const paddings = [
  '0',
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

const PADDING: {
  [key: string]: string;
} = {};

const PADDINGS: BreakpointClasses = { ...defaultBreakpoints };

paddings.forEach((padding) => {
  const prefix = 'p';
  PADDING[padding] = `${prefix}-${padding}`;

  breakpoints.forEach((breakpoint) => {
    if (!PADDINGS[breakpoint]) {
      PADDINGS[breakpoint] = {};
    }

    PADDINGS[breakpoint][padding] = `${breakpoint}:${prefix}-${padding}`;
  });
});

const PADDING_X: {
  [key: string]: string;
} = {};

const PADDINGS_X: BreakpointClasses = { ...defaultBreakpoints };

paddings.forEach((padding) => {
  const prefix = 'px';
  PADDING_X[padding] = `${prefix}-${padding}`;

  breakpoints.forEach((breakpoint) => {
    if (!PADDINGS_X[breakpoint]) {
      PADDINGS_X[breakpoint] = {};
    }

    PADDINGS_X[breakpoint][padding] = `${breakpoint}:${prefix}-${padding}`;
  });
});

const PADDING_Y: {
  [key: string]: string;
} = {};

const PADDINGS_Y: BreakpointClasses = { ...defaultBreakpoints };

paddings.forEach((padding) => {
  const prefix = 'py';
  PADDING_Y[padding] = `${prefix}-${padding}`;

  breakpoints.forEach((breakpoint) => {
    if (!PADDINGS_Y[breakpoint]) {
      PADDINGS_Y[breakpoint] = {};
    }

    PADDINGS_Y[breakpoint][padding] = `${breakpoint}:${prefix}-${padding}`;
  });
});

const PADDING_LEFT: {
  [key: string]: string;
} = {};

const PADDINGS_LEFT: BreakpointClasses = { ...defaultBreakpoints };

paddings.forEach((padding) => {
  const prefix = 'pl';
  PADDING_LEFT[padding] = `${prefix}-${padding}`;

  breakpoints.forEach((breakpoint) => {
    if (!PADDINGS_LEFT[breakpoint]) {
      PADDINGS_LEFT[breakpoint] = {};
    }

    PADDINGS_LEFT[breakpoint][padding] = `${breakpoint}:${prefix}-${padding}`;
  });
});

const PADDING_RIGHT: {
  [key: string]: string;
} = {};

const PADDINGS_RIGHT: BreakpointClasses = { ...defaultBreakpoints };

paddings.forEach((padding) => {
  const prefix = 'pr';
  PADDING_RIGHT[padding] = `${prefix}-${padding}`;

  breakpoints.forEach((breakpoint) => {
    if (!PADDINGS_RIGHT[breakpoint]) {
      PADDINGS_RIGHT[breakpoint] = {};
    }

    PADDINGS_RIGHT[breakpoint][padding] = `${breakpoint}:${prefix}-${padding}`;
  });
});

const PADDING_TOP: {
  [key: string]: string;
} = {};

const PADDINGS_TOP: BreakpointClasses = { ...defaultBreakpoints };

paddings.forEach((padding) => {
  const prefix = 'pt';
  PADDING_TOP[padding] = `${prefix}-${padding}`;

  breakpoints.forEach((breakpoint) => {
    if (!PADDINGS_TOP[breakpoint]) {
      PADDINGS_TOP[breakpoint] = {};
    }

    PADDINGS_TOP[breakpoint][padding] = `${breakpoint}:${prefix}-${padding}`;
  });
});

const PADDING_BOTTOM: {
  [key: string]: string;
} = {};

const PADDINGS_BOTTOM: BreakpointClasses = { ...defaultBreakpoints };

paddings.forEach((padding) => {
  const prefix = 'pb';
  PADDING_BOTTOM[padding] = `${prefix}-${padding}`;

  breakpoints.forEach((breakpoint) => {
    if (!PADDINGS_BOTTOM[breakpoint]) {
      PADDINGS_BOTTOM[breakpoint] = {};
    }

    PADDINGS_BOTTOM[breakpoint][padding] = `${breakpoint}:${prefix}-${padding}`;
  });
});

const margins = [
  '0',
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

const MARGIN: {
  [key: string]: string;
} = {};

const MARGINS: BreakpointClasses = { ...defaultBreakpoints };

margins.forEach((margin) => {
  const prefix = 'm';
  MARGIN[margin] = `${prefix}-${margin}`;
  MARGIN[`-${margin}`] = `-${prefix}-${margin}`;

  breakpoints.forEach((breakpoint) => {
    if (!MARGINS[breakpoint]) {
      MARGINS[breakpoint] = {};
    }

    MARGINS[breakpoint][margin] = `${breakpoint}:${prefix}-${margin}`;
    MARGINS[breakpoint][`-${margin}`] = `${breakpoint}:-${prefix}-${margin}`;
  });
});

const MARGIN_X: {
  [key: string]: string;
} = {};

const MARGINS_X: BreakpointClasses = { ...defaultBreakpoints };

margins.forEach((margin) => {
  const prefix = 'mx';
  MARGIN_X[margin] = `${prefix}-${margin}`;
  MARGIN_X[`-${margin}`] = `-${prefix}-${margin}`;

  breakpoints.forEach((breakpoint) => {
    if (!MARGINS_X[breakpoint]) {
      MARGINS_X[breakpoint] = {};
    }

    MARGINS_X[breakpoint][margin] = `${breakpoint}:${prefix}-${margin}`;
    MARGINS_X[breakpoint][`-${margin}`] = `${breakpoint}:-${prefix}-${margin}`;
  });
});

const MARGIN_Y: {
  [key: string]: string;
} = {};

const MARGINS_Y: BreakpointClasses = { ...defaultBreakpoints };

margins.forEach((margin) => {
  const prefix = 'my';
  MARGIN_Y[margin] = `${prefix}-${margin}`;
  MARGIN_Y[`-${margin}`] = `-${prefix}-${margin}`;

  breakpoints.forEach((breakpoint) => {
    if (!MARGINS_Y[breakpoint]) {
      MARGINS_Y[breakpoint] = {};
    }

    MARGINS_Y[breakpoint][margin] = `${breakpoint}:${prefix}-${margin}`;
    MARGINS_Y[breakpoint][`-${margin}`] = `${breakpoint}:-${prefix}-${margin}`;
  });
});

const MARGIN_LEFT: {
  [key: string]: string;
} = {};

const MARGINS_LEFT: BreakpointClasses = { ...defaultBreakpoints };

margins.forEach((margin) => {
  const prefix = 'ml';
  MARGIN_LEFT[margin] = `${prefix}-${margin}`;
  MARGIN_LEFT[`-${margin}`] = `-${prefix}-${margin}`;

  breakpoints.forEach((breakpoint) => {
    if (!MARGINS_LEFT[breakpoint]) {
      MARGINS_LEFT[breakpoint] = {};
    }

    MARGINS_LEFT[breakpoint][margin] = `${breakpoint}:${prefix}-${margin}`;

    MARGINS_LEFT[breakpoint][
      `-${margin}`
    ] = `${breakpoint}:-${prefix}-${margin}`;
  });
});

const MARGIN_RIGHT: {
  [key: string]: string;
} = {};

const MARGINS_RIGHT: BreakpointClasses = { ...defaultBreakpoints };

margins.forEach((margin) => {
  const prefix = 'mr';
  MARGIN_RIGHT[margin] = `${prefix}-${margin}`;
  MARGIN_RIGHT[`-${margin}`] = `-${prefix}-${margin}`;

  breakpoints.forEach((breakpoint) => {
    if (!MARGINS_RIGHT[breakpoint]) {
      MARGINS_RIGHT[breakpoint] = {};
    }

    MARGINS_RIGHT[breakpoint][margin] = `${breakpoint}:${prefix}-${margin}`;

    MARGINS_RIGHT[breakpoint][
      `-${margin}`
    ] = `${breakpoint}:-${prefix}-${margin}`;
  });
});

const MARGIN_TOP: {
  [key: string]: string;
} = {};

const MARGINS_TOP: BreakpointClasses = { ...defaultBreakpoints };

margins.forEach((margin) => {
  const prefix = 'mt';
  MARGIN_TOP[margin] = `${prefix}-${margin}`;
  MARGIN_TOP[`-${margin}`] = `-${prefix}-${margin}`;

  breakpoints.forEach((breakpoint) => {
    if (!MARGINS_TOP[breakpoint]) {
      MARGINS_TOP[breakpoint] = {};
    }

    MARGINS_TOP[breakpoint][margin] = `${breakpoint}:${prefix}-${margin}`;

    MARGINS_TOP[breakpoint][
      `-${margin}`
    ] = `${breakpoint}:-${prefix}-${margin}`;
  });
});

const MARGIN_BOTTOM: {
  [key: string]: string;
} = {};

const MARGINS_BOTTOM: BreakpointClasses = { ...defaultBreakpoints };

margins.forEach((margin) => {
  const prefix = 'mb';
  MARGIN_BOTTOM[margin] = `${prefix}-${margin}`;
  MARGIN_BOTTOM[`-${margin}`] = `-${prefix}-${margin}`;

  breakpoints.forEach((breakpoint) => {
    if (!MARGINS_BOTTOM[breakpoint]) {
      MARGINS_BOTTOM[breakpoint] = {};
    }

    MARGINS_BOTTOM[breakpoint][margin] = `${breakpoint}:${prefix}-${margin}`;

    MARGINS_BOTTOM[breakpoint][
      `-${margin}`
    ] = `${breakpoint}:-${prefix}-${margin}`;
  });
});

interface Props {
  padding?:
    | keyof typeof PADDING
    | {
        default?: keyof typeof PADDINGS.default;
        sm?: keyof typeof PADDINGS.sm;
        md?: keyof typeof PADDINGS.md;
        lg?: keyof typeof PADDINGS.lg;
        xl?: keyof typeof PADDINGS.xl;
      };
  paddingLeft?:
    | keyof typeof PADDING_LEFT
    | {
        default?: keyof typeof PADDINGS_LEFT.default;
        sm?: keyof typeof PADDINGS_LEFT.sm;
        md?: keyof typeof PADDINGS_LEFT.md;
        lg?: keyof typeof PADDINGS_LEFT.lg;
        xl?: keyof typeof PADDINGS_LEFT.xl;
      };
  paddingRight?:
    | keyof typeof PADDING_RIGHT
    | {
        default?: keyof typeof PADDINGS_RIGHT.default;
        sm?: keyof typeof PADDINGS_RIGHT.sm;
        md?: keyof typeof PADDINGS_RIGHT.md;
        lg?: keyof typeof PADDINGS_RIGHT.lg;
        xl?: keyof typeof PADDINGS_RIGHT.xl;
      };
  paddingTop?:
    | keyof typeof PADDING_TOP
    | {
        default?: keyof typeof PADDINGS_TOP.default;
        sm?: keyof typeof PADDINGS_TOP.sm;
        md?: keyof typeof PADDINGS_TOP.md;
        lg?: keyof typeof PADDINGS_TOP.lg;
        xl?: keyof typeof PADDINGS_TOP.xl;
      };
  paddingBottom?:
    | keyof typeof PADDING_BOTTOM
    | {
        default?: keyof typeof PADDINGS_BOTTOM.default;
        sm?: keyof typeof PADDINGS_BOTTOM.sm;
        md?: keyof typeof PADDINGS_BOTTOM.md;
        lg?: keyof typeof PADDINGS_BOTTOM.lg;
        xl?: keyof typeof PADDINGS_BOTTOM.xl;
      };
  paddingX?:
    | keyof typeof PADDING_X
    | {
        default?: keyof typeof PADDINGS_X.default;
        sm?: keyof typeof PADDINGS_X.sm;
        md?: keyof typeof PADDINGS_X.md;
        lg?: keyof typeof PADDINGS_X.lg;
        xl?: keyof typeof PADDINGS_X.xl;
      };
  paddingY?:
    | keyof typeof PADDING_Y
    | {
        default?: keyof typeof PADDINGS_Y.default;
        sm?: keyof typeof PADDINGS_Y.sm;
        md?: keyof typeof PADDINGS_Y.md;
        lg?: keyof typeof PADDINGS_Y.lg;
        xl?: keyof typeof PADDINGS_Y.xl;
      };
  margin?:
    | keyof typeof MARGIN
    | {
        default?: keyof typeof MARGINS.default;
        sm?: keyof typeof MARGINS.sm;
        md?: keyof typeof MARGINS.md;
        lg?: keyof typeof MARGINS.lg;
        xl?: keyof typeof MARGINS.xl;
      };
  marginLeft?:
    | keyof typeof MARGIN_LEFT
    | {
        default?: keyof typeof MARGINS_LEFT.default;
        sm?: keyof typeof MARGINS_LEFT.sm;
        md?: keyof typeof MARGINS_LEFT.md;
        lg?: keyof typeof MARGINS_LEFT.lg;
        xl?: keyof typeof MARGINS_LEFT.xl;
      };
  marginRight?:
    | keyof typeof MARGIN_RIGHT
    | {
        default?: keyof typeof MARGINS_RIGHT.default;
        sm?: keyof typeof MARGINS_RIGHT.sm;
        md?: keyof typeof MARGINS_RIGHT.md;
        lg?: keyof typeof MARGINS_RIGHT.lg;
        xl?: keyof typeof MARGINS_RIGHT.xl;
      };
  marginTop?:
    | keyof typeof MARGIN_TOP
    | {
        default?: keyof typeof MARGINS_TOP.default;
        sm?: keyof typeof MARGINS_TOP.sm;
        md?: keyof typeof MARGINS_TOP.md;
        lg?: keyof typeof MARGINS_TOP.lg;
        xl?: keyof typeof MARGINS_TOP.xl;
      };
  marginBottom?:
    | keyof typeof MARGIN_BOTTOM
    | {
        default?: keyof typeof MARGINS_BOTTOM.default;
        sm?: keyof typeof MARGINS_BOTTOM.sm;
        md?: keyof typeof MARGINS_BOTTOM.md;
        lg?: keyof typeof MARGINS_BOTTOM.lg;
        xl?: keyof typeof MARGINS_BOTTOM.xl;
      };
  marginX?:
    | keyof typeof MARGIN_X
    | {
        default?: keyof typeof MARGINS_X.default;
        sm?: keyof typeof MARGINS_X.sm;
        md?: keyof typeof MARGINS_X.md;
        lg?: keyof typeof MARGINS_X.lg;
        xl?: keyof typeof MARGINS_X.xl;
      };
  marginY?:
    | keyof typeof MARGIN_Y
    | {
        default?: keyof typeof MARGINS_Y.default;
        sm?: keyof typeof MARGINS_Y.sm;
        md?: keyof typeof MARGINS_Y.md;
        lg?: keyof typeof MARGINS_Y.lg;
        xl?: keyof typeof MARGINS_Y.xl;
      };
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Space: React.FC<Props> = ({
  padding,
  paddingX,
  paddingY,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  margin,
  marginX,
  marginY,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  className,
  style,
  children,
}) => {
  let computedClass = '';

  if (padding) {
    if (typeof padding === 'string') {
      computedClass += ` ${PADDING[padding]}`;
    } else {
      Object.keys(padding).forEach((key) => {
        computedClass += ` ${PADDINGS[key][padding[key]]}`;
      });
    }
  }

  if (paddingX) {
    if (typeof paddingX === 'string') {
      computedClass += ` ${PADDING_X[paddingX]}`;
    } else {
      Object.keys(paddingX).forEach((key) => {
        computedClass += ` ${PADDINGS_X[key][paddingX[key]]}`;
      });
    }
  }

  if (paddingY) {
    if (typeof paddingY === 'string') {
      computedClass += ` ${PADDING_Y[paddingY]}`;
    } else {
      Object.keys(paddingY).forEach((key) => {
        computedClass += ` ${PADDINGS_Y[key][paddingY[key]]}`;
      });
    }
  }

  if (paddingLeft) {
    if (typeof paddingLeft === 'string') {
      computedClass += ` ${PADDING_LEFT[paddingLeft]}`;
    } else {
      Object.keys(paddingLeft).forEach((key) => {
        computedClass += ` ${PADDINGS_LEFT[key][paddingLeft[key]]}`;
      });
    }
  }

  if (paddingRight) {
    if (typeof paddingRight === 'string') {
      computedClass += ` ${PADDING_RIGHT[paddingRight]}`;
    } else {
      Object.keys(paddingRight).forEach((key) => {
        computedClass += ` ${PADDINGS_RIGHT[key][paddingRight[key]]}`;
      });
    }
  }

  if (paddingTop) {
    if (typeof paddingTop === 'string') {
      computedClass += ` ${PADDING_TOP[paddingTop]}`;
    } else {
      Object.keys(paddingTop).forEach((key) => {
        computedClass += ` ${PADDINGS_TOP[key][paddingTop[key]]}`;
      });
    }
  }

  if (paddingBottom) {
    if (typeof paddingBottom === 'string') {
      computedClass += ` ${PADDING_BOTTOM[paddingBottom]}`;
    } else {
      Object.keys(paddingBottom).forEach((key) => {
        computedClass += ` ${PADDINGS_BOTTOM[key][paddingBottom[key]]}`;
      });
    }
  }

  if (margin) {
    if (typeof margin === 'string') {
      computedClass += ` ${MARGIN[margin]}`;
    } else {
      Object.keys(margin).forEach((key) => {
        computedClass += ` ${MARGINS[key][margin[key]]}`;
      });
    }
  }

  if (marginX) {
    if (typeof marginX === 'string') {
      computedClass += ` ${MARGIN_X[marginX]}`;
    } else {
      Object.keys(marginX).forEach((key) => {
        computedClass += ` ${MARGINS_X[key][marginX[key]]}`;
      });
    }
  }

  if (marginY) {
    if (typeof marginY === 'string') {
      computedClass += ` ${MARGIN_Y[marginY]}`;
    } else {
      Object.keys(marginY).forEach((key) => {
        computedClass += ` ${MARGINS_Y[key][marginY[key]]}`;
      });
    }
  }

  if (marginLeft) {
    if (typeof marginLeft === 'string') {
      computedClass += ` ${MARGIN_LEFT[marginLeft]}`;
    } else {
      Object.keys(marginLeft).forEach((key) => {
        computedClass += ` ${MARGINS_LEFT[key][marginLeft[key]]}`;
      });
    }
  }

  if (marginRight) {
    if (typeof marginRight === 'string') {
      computedClass += ` ${MARGIN_RIGHT[marginRight]}`;
    } else {
      Object.keys(marginRight).forEach((key) => {
        computedClass += ` ${MARGINS_RIGHT[key][marginRight[key]]}`;
      });
    }
  }

  if (marginTop) {
    if (typeof marginTop === 'string') {
      computedClass += ` ${MARGIN_TOP[marginTop]}`;
    } else {
      Object.keys(marginTop).forEach((key) => {
        computedClass += ` ${MARGINS_TOP[key][marginTop[key]]}`;
      });
    }
  }

  if (marginBottom) {
    if (typeof marginBottom === 'string') {
      computedClass += ` ${MARGIN_BOTTOM[marginBottom]}`;
    } else {
      Object.keys(marginBottom).forEach((key) => {
        computedClass += ` ${MARGINS_BOTTOM[key][marginBottom[key]]}`;
      });
    }
  }

  return (
    <div className={classify([computedClass, className])} style={style}>
      {children}
    </div>
  );
};

export default Space;
