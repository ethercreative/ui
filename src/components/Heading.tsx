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
import { computeClass } from '../helpers/computeClass';

const LEVEL = {
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
};

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
  level?: keyof typeof LEVEL;
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
  className?: React.HTMLAttributes<HTMLHeadingElement>['className'];
  style?: React.HTMLAttributes<HTMLHeadingElement>['style'];
}

const Heading: React.FC<Props> = ({
  level = '1',
  size = 'base',
  weight,
  align,
  leading,
  tracking,
  className,
  style,
  children,
}) => {
  const computedClasses: (string | undefined)[] = [
    computeClass(size, SIZE, SIZES),
    computeClass(weight, WEIGHT, WEIGHTS),
    computeClass(align, ALIGN, ALIGNS),
    computeClass(leading, LEADING, LEADINGS),
    computeClass(tracking, TRACKING, TRACKINGS),
  ];

  const compiledClass = classify([...computedClasses, className]);

  switch (level) {
    case '2':
      return (
        <h2 className={compiledClass} style={style}>
          {children}
        </h2>
      );

    case '3':
      return (
        <h3 className={compiledClass} style={style}>
          {children}
        </h3>
      );

    case '4':
      return (
        <h4 className={compiledClass} style={style}>
          {children}
        </h4>
      );

    case '5':
      return (
        <h5 className={compiledClass} style={style}>
          {children}
        </h5>
      );

    case '6':
      return (
        <h6 className={compiledClass} style={style}>
          {children}
        </h6>
      );

    default:
      return (
        <h1 className={compiledClass} style={style}>
          {children}
        </h1>
      );
  }
};

export default Heading;
