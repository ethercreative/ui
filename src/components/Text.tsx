import * as React from 'react';
import { classify } from '../helpers/classify';
import { BreakpointClasses, breakpoints } from '../helpers/breakpoints';

import {
  fontWeights,
  FONT_WEIGHTS,
  LEADINGS,
  leadings,
  textAligns,
  textSizes,
  TEXT_ALIGNS,
  TEXT_SIZES,
  TRACKINGS,
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
  const prefix = 'text';
  ALIGN[align] = `${prefix}-${align}`;

  breakpoints.forEach((breakpoint) => {
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
  const prefix = 'leading';
  LEADING[leading] = `${prefix}-${leading}`;

  breakpoints.forEach((breakpoint) => {
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
  const prefix = 'tracking';
  TRACKING[tracking] = `${prefix}-${tracking}`;

  breakpoints.forEach((breakpoint) => {
    TRACKINGS[breakpoint][tracking] = `${breakpoint}:${prefix}-${tracking}`;
  });
});

interface Props {
  size?:
    | TEXT_SIZES
    | {
        default?: TEXT_SIZES;
        sm?: TEXT_SIZES;
        md?: TEXT_SIZES;
        lg?: TEXT_SIZES;
        xl?: TEXT_SIZES;
      };
  weight?:
    | FONT_WEIGHTS
    | {
        default?: FONT_WEIGHTS;
        sm?: FONT_WEIGHTS;
        md?: FONT_WEIGHTS;
        lg?: FONT_WEIGHTS;
        xl?: FONT_WEIGHTS;
      };
  align?:
    | TEXT_ALIGNS
    | {
        default?: TEXT_ALIGNS;
        sm?: TEXT_ALIGNS;
        md?: TEXT_ALIGNS;
        lg?: TEXT_ALIGNS;
        xl?: TEXT_ALIGNS;
      };
  leading?:
    | LEADINGS
    | {
        default?: LEADINGS;
        sm?: LEADINGS;
        md?: LEADINGS;
        lg?: LEADINGS;
        xl?: LEADINGS;
      };
  tracking?:
    | TRACKINGS
    | {
        default?: TRACKINGS;
        sm?: TRACKINGS;
        md?: TRACKINGS;
        lg?: TRACKINGS;
        xl?: TRACKINGS;
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
