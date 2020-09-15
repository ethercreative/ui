import * as React from 'react';
import { classify } from '../helpers/classify';
import { BreakpointClasses, breakpoints } from '../helpers/breakpoints';

import {
  fontWeights,
  leadings,
  textAligns,
  textSizes,
  trackings,
} from '../helpers/text';

const SIZE: {
  [key: string]: string;
} = {};

const SIZES: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

textSizes.forEach((size) => {
  const prefix = 'text';
  SIZE[size] = `${prefix}-${size}`;

  breakpoints.forEach((breakpoint) => {
    if (!SIZES[breakpoint]) {
      SIZES[breakpoint] = {};
    }

    SIZES[breakpoint][size] = `${breakpoint}:${prefix}-${size}`;
  });
});

const WEIGHT: {
  [key: string]: string;
} = {};

const WEIGHTS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

fontWeights.forEach((weight) => {
  const prefix = 'font';
  WEIGHT[weight] = `${prefix}-${weight}`;

  breakpoints.forEach((breakpoint) => {
    if (!WEIGHTS[breakpoint]) {
      WEIGHTS[breakpoint] = {};
    }

    WEIGHTS[breakpoint][weight] = `${breakpoint}:${prefix}-${weight}`;
  });
});

const ALIGN: {
  [key: string]: string;
} = {};

const ALIGNS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

textAligns.forEach((align) => {
  const prefix = 'font';
  ALIGN[align] = `${prefix}-${align}`;

  breakpoints.forEach((breakpoint) => {
    if (!ALIGNS[breakpoint]) {
      ALIGNS[breakpoint] = {};
    }

    ALIGNS[breakpoint][align] = `${breakpoint}:${prefix}-${align}`;
  });
});

const LEADING: {
  [key: string]: string;
} = {};

const LEADINGS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

leadings.forEach((leading) => {
  const prefix = 'font';
  LEADING[leading] = `${prefix}-${leading}`;

  breakpoints.forEach((breakpoint) => {
    if (!LEADINGS[breakpoint]) {
      LEADINGS[breakpoint] = {};
    }

    LEADINGS[breakpoint][leading] = `${breakpoint}:${prefix}-${leading}`;
  });
});

const TRACKING: {
  [key: string]: string;
} = {};

const TRACKINGS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

trackings.forEach((tracking) => {
  const prefix = 'font';
  TRACKING[tracking] = `${prefix}-${tracking}`;

  breakpoints.forEach((breakpoint) => {
    if (!TRACKINGS[breakpoint]) {
      TRACKINGS[breakpoint] = {};
    }

    TRACKINGS[breakpoint][tracking] = `${breakpoint}:${prefix}-${tracking}`;
  });
});

interface Props {
  size?:
    | keyof typeof SIZE
    | {
        default?: keyof typeof SIZES.default;
        sm?: keyof typeof SIZES.sm;
        md?: keyof typeof SIZES.md;
        lg?: keyof typeof SIZES.lg;
        xl?: keyof typeof SIZES.xl;
      };
  weight?:
    | keyof typeof WEIGHT
    | {
        default?: keyof typeof WEIGHTS.default;
        sm?: keyof typeof WEIGHTS.sm;
        md?: keyof typeof WEIGHTS.md;
        lg?: keyof typeof WEIGHTS.lg;
        xl?: keyof typeof WEIGHTS.xl;
      };
  align?:
    | keyof typeof ALIGN
    | {
        default?: keyof typeof ALIGNS.default;
        sm?: keyof typeof ALIGNS.sm;
        md?: keyof typeof ALIGNS.md;
        lg?: keyof typeof ALIGNS.lg;
        xl?: keyof typeof ALIGNS.xl;
      };
  leading?:
    | keyof typeof LEADING
    | {
        default?: keyof typeof LEADINGS.default;
        sm?: keyof typeof LEADINGS.sm;
        md?: keyof typeof LEADINGS.md;
        lg?: keyof typeof LEADINGS.lg;
        xl?: keyof typeof LEADINGS.xl;
      };
  tracking?:
    | keyof typeof TRACKING
    | {
        default?: keyof typeof TRACKINGS.default;
        sm?: keyof typeof TRACKINGS.sm;
        md?: keyof typeof TRACKINGS.md;
        lg?: keyof typeof TRACKINGS.lg;
        xl?: keyof typeof TRACKINGS.xl;
      };
  className?: React.HTMLAttributes<HTMLParagraphElement>['className'];
  style?: React.HTMLAttributes<HTMLParagraphElement>['style'];
}

const Text: React.FC<Props> = ({
  size = 'base',
  weight,
  align,
  leading,
  tracking,
  className,
  style,
  children,
}) => {
  let computedClass = '';

  if (size) {
    if (typeof size === 'string') {
      computedClass += ` ${SIZE[size]}`;
    } else {
      Object.keys(size).forEach((key) => {
        computedClass += ` ${SIZES[key][size[key]]}`;
      });
    }
  }

  if (weight) {
    if (typeof weight === 'string') {
      computedClass += ` ${WEIGHT[weight]}`;
    } else {
      Object.keys(weight).forEach((key) => {
        computedClass += ` ${WEIGHTS[key][weight[key]]}`;
      });
    }
  }

  if (align) {
    if (typeof align === 'string') {
      computedClass += ` ${ALIGN[align]}`;
    } else {
      Object.keys(align).forEach((key) => {
        computedClass += ` ${ALIGNS[key][align[key]]}`;
      });
    }
  }

  if (leading) {
    if (typeof leading === 'string') {
      computedClass += ` ${LEADING[leading]}`;
    } else {
      Object.keys(leading).forEach((key) => {
        computedClass += ` ${LEADINGS[key][leading[key]]}`;
      });
    }
  }

  if (tracking) {
    if (typeof tracking === 'string') {
      computedClass += ` ${TRACKING[tracking]}`;
    } else {
      Object.keys(tracking).forEach((key) => {
        computedClass += ` ${TRACKINGS[key][tracking[key]]}`;
      });
    }
  }

  return (
    <p className={classify([computedClass, className])} style={style}>
      {children}
    </p>
  );
};

export default Text;
