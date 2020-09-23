import * as React from 'react';
import { classify } from '../helpers/classify';
import { BreakpointClasses, breakpoints } from '../helpers/breakpoints';

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
] as const;

type PADDINGS = keyof { [key in typeof paddings[number]]: string };

const PADDING: {
  [key: string]: string;
} = {};

const PADDINGS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

paddings.forEach((padding) => {
  const prefix = 'p';
  PADDING[padding] = `${prefix}-${padding}`;

  breakpoints.forEach((breakpoint) => {
    PADDINGS[breakpoint][padding] = `${breakpoint}:${prefix}-${padding}`;
  });
});

const PADDING_X: {
  [key: string]: string;
} = {};

const PADDINGS_X: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

paddings.forEach((padding) => {
  const prefix = 'px';
  PADDING_X[padding] = `${prefix}-${padding}`;

  breakpoints.forEach((breakpoint) => {
    PADDINGS_X[breakpoint][padding] = `${breakpoint}:${prefix}-${padding}`;
  });
});

const PADDING_Y: {
  [key: string]: string;
} = {};

const PADDINGS_Y: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

paddings.forEach((padding) => {
  const prefix = 'py';
  PADDING_Y[padding] = `${prefix}-${padding}`;

  breakpoints.forEach((breakpoint) => {
    PADDINGS_Y[breakpoint][padding] = `${breakpoint}:${prefix}-${padding}`;
  });
});

const PADDING_LEFT: {
  [key: string]: string;
} = {};

const PADDINGS_LEFT: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

paddings.forEach((padding) => {
  const prefix = 'pl';
  PADDING_LEFT[padding] = `${prefix}-${padding}`;

  breakpoints.forEach((breakpoint) => {
    PADDINGS_LEFT[breakpoint][padding] = `${breakpoint}:${prefix}-${padding}`;
  });
});

const PADDING_RIGHT: {
  [key: string]: string;
} = {};

const PADDINGS_RIGHT: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

paddings.forEach((padding) => {
  const prefix = 'pr';
  PADDING_RIGHT[padding] = `${prefix}-${padding}`;

  breakpoints.forEach((breakpoint) => {
    PADDINGS_RIGHT[breakpoint][padding] = `${breakpoint}:${prefix}-${padding}`;
  });
});

const PADDING_TOP: {
  [key: string]: string;
} = {};

const PADDINGS_TOP: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

paddings.forEach((padding) => {
  const prefix = 'pt';
  PADDING_TOP[padding] = `${prefix}-${padding}`;

  breakpoints.forEach((breakpoint) => {
    PADDINGS_TOP[breakpoint][padding] = `${breakpoint}:${prefix}-${padding}`;
  });
});

const PADDING_BOTTOM: {
  [key: string]: string;
} = {};

const PADDINGS_BOTTOM: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

paddings.forEach((padding) => {
  const prefix = 'pb';
  PADDING_BOTTOM[padding] = `${prefix}-${padding}`;

  breakpoints.forEach((breakpoint) => {
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
  '-0',
  '-1',
  '-2',
  '-3',
  '-4',
  '-5',
  '-6',
  '-8',
  '-10',
  '-12',
  '-16',
  '-20',
  '-24',
  '-32',
  '-40',
  '-48',
  '-56',
  '-64',
] as const;

type MARGINS = keyof { [key in typeof margins[number]]: string };

const MARGIN: {
  [key: string]: string;
} = {};

const MARGINS: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

margins.forEach((margin) => {
  const prefix = 'm';

  if (margin.includes('-')) {
    MARGIN[margin] = `-${prefix}-${margin.replace('-', '')}`;
  } else {
    MARGIN[margin] = `${prefix}-${margin}`;
  }

  breakpoints.forEach((breakpoint) => {
    if (margin.includes('-')) {
      MARGINS[breakpoint][margin] = `${breakpoint}:-${prefix}-${margin}`;
    } else {
      MARGINS[breakpoint][margin] = `${breakpoint}:${prefix}-${margin}`;
    }
  });
});

const MARGIN_X: {
  [key: string]: string;
} = {};

const MARGINS_X: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

margins.forEach((margin) => {
  const prefix = 'mx';

  if (margin.includes('-')) {
    MARGIN_X[margin] = `-${prefix}-${margin.replace('-', '')}`;
  } else {
    MARGIN_X[margin] = `${prefix}-${margin}`;
  }

  breakpoints.forEach((breakpoint) => {
    if (margin.includes('-')) {
      MARGINS_X[breakpoint][margin] = `${breakpoint}:-${prefix}-${margin}`;
    } else {
      MARGINS_X[breakpoint][margin] = `${breakpoint}:${prefix}-${margin}`;
    }
  });
});

const MARGIN_Y: {
  [key: string]: string;
} = {};

const MARGINS_Y: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

margins.forEach((margin) => {
  const prefix = 'my';

  if (margin.includes('-')) {
    MARGIN_Y[margin] = `-${prefix}-${margin.replace('-', '')}`;
  } else {
    MARGIN_Y[margin] = `${prefix}-${margin}`;
  }

  breakpoints.forEach((breakpoint) => {
    if (margin.includes('-')) {
      MARGINS_Y[breakpoint][margin] = `${breakpoint}:-${prefix}-${margin}`;
    } else {
      MARGINS_Y[breakpoint][margin] = `${breakpoint}:${prefix}-${margin}`;
    }
  });
});

const MARGIN_LEFT: {
  [key: string]: string;
} = {};

const MARGINS_LEFT: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

margins.forEach((margin) => {
  const prefix = 'ml';

  if (margin.includes('-')) {
    MARGIN_LEFT[margin] = `-${prefix}-${margin.replace('-', '')}`;
  } else {
    MARGIN_LEFT[margin] = `${prefix}-${margin}`;
  }

  breakpoints.forEach((breakpoint) => {
    if (margin.includes('-')) {
      MARGINS_LEFT[breakpoint][margin] = `${breakpoint}:-${prefix}-${margin}`;
    } else {
      MARGINS_LEFT[breakpoint][margin] = `${breakpoint}:${prefix}-${margin}`;
    }
  });
});

const MARGIN_RIGHT: {
  [key: string]: string;
} = {};

const MARGINS_RIGHT: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

margins.forEach((margin) => {
  const prefix = 'mr';

  if (margin.includes('-')) {
    MARGIN_RIGHT[margin] = `-${prefix}-${margin.replace('-', '')}`;
  } else {
    MARGIN_RIGHT[margin] = `${prefix}-${margin}`;
  }

  breakpoints.forEach((breakpoint) => {
    if (margin.includes('-')) {
      MARGINS_RIGHT[breakpoint][margin] = `${breakpoint}:-${prefix}-${margin}`;
    } else {
      MARGINS_RIGHT[breakpoint][margin] = `${breakpoint}:${prefix}-${margin}`;
    }
  });
});

const MARGIN_TOP: {
  [key: string]: string;
} = {};

const MARGINS_TOP: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

margins.forEach((margin) => {
  const prefix = 'mt';

  if (margin.includes('-')) {
    MARGIN_TOP[margin] = `-${prefix}-${margin.replace('-', '')}`;
  } else {
    MARGIN_TOP[margin] = `${prefix}-${margin}`;
  }

  breakpoints.forEach((breakpoint) => {
    if (margin.includes('-')) {
      MARGINS_TOP[breakpoint][margin] = `${breakpoint}:-${prefix}-${margin}`;
    } else {
      MARGINS_TOP[breakpoint][margin] = `${breakpoint}:${prefix}-${margin}`;
    }
  });
});

const MARGIN_BOTTOM: {
  [key: string]: string;
} = {};

const MARGINS_BOTTOM: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

margins.forEach((margin) => {
  const prefix = 'mb';

  if (margin.includes('-')) {
    MARGIN_BOTTOM[margin] = `-${prefix}-${margin.replace('-', '')}`;
  } else {
    MARGIN_BOTTOM[margin] = `${prefix}-${margin}`;
  }

  breakpoints.forEach((breakpoint) => {
    if (margin.includes('-')) {
      MARGINS_BOTTOM[breakpoint][margin] = `${breakpoint}:-${prefix}-${margin}`;
    } else {
      MARGINS_BOTTOM[breakpoint][margin] = `${breakpoint}:${prefix}-${margin}`;
    }
  });
});

interface Props {
  padding?:
    | PADDINGS
    | {
        default?: PADDINGS;
        sm?: PADDINGS;
        md?: PADDINGS;
        lg?: PADDINGS;
        xl?: PADDINGS;
      };
  paddingLeft?:
    | PADDINGS
    | {
        default?: PADDINGS;
        sm?: PADDINGS;
        md?: PADDINGS;
        lg?: PADDINGS;
        xl?: PADDINGS;
      };
  paddingRight?:
    | PADDINGS
    | {
        default?: PADDINGS;
        sm?: PADDINGS;
        md?: PADDINGS;
        lg?: PADDINGS;
        xl?: PADDINGS;
      };
  paddingTop?:
    | PADDINGS
    | {
        default?: PADDINGS;
        sm?: PADDINGS;
        md?: PADDINGS;
        lg?: PADDINGS;
        xl?: PADDINGS;
      };
  paddingBottom?:
    | PADDINGS
    | {
        default?: PADDINGS;
        sm?: PADDINGS;
        md?: PADDINGS;
        lg?: PADDINGS;
        xl?: PADDINGS;
      };
  paddingX?:
    | PADDINGS
    | {
        default?: PADDINGS;
        sm?: PADDINGS;
        md?: PADDINGS;
        lg?: PADDINGS;
        xl?: PADDINGS;
      };
  paddingY?:
    | PADDINGS
    | {
        default?: PADDINGS;
        sm?: PADDINGS;
        md?: PADDINGS;
        lg?: PADDINGS;
        xl?: PADDINGS;
      };
  margin?:
    | MARGINS
    | {
        default?: MARGINS;
        sm?: MARGINS;
        md?: MARGINS;
        lg?: MARGINS;
        xl?: MARGINS;
      };
  marginLeft?:
    | MARGINS
    | {
        default?: MARGINS;
        sm?: MARGINS;
        md?: MARGINS;
        lg?: MARGINS;
        xl?: MARGINS;
      };
  marginRight?:
    | MARGINS
    | {
        default?: MARGINS;
        sm?: MARGINS;
        md?: MARGINS;
        lg?: MARGINS;
        xl?: MARGINS;
      };
  marginTop?:
    | MARGINS
    | {
        default?: MARGINS;
        sm?: MARGINS;
        md?: MARGINS;
        lg?: MARGINS;
        xl?: MARGINS;
      };
  marginBottom?:
    | MARGINS
    | {
        default?: MARGINS;
        sm?: MARGINS;
        md?: MARGINS;
        lg?: MARGINS;
        xl?: MARGINS;
      };
  marginX?:
    | MARGINS
    | {
        default?: MARGINS;
        sm?: MARGINS;
        md?: MARGINS;
        lg?: MARGINS;
        xl?: MARGINS;
      };
  marginY?:
    | MARGINS
    | {
        default?: MARGINS;
        sm?: MARGINS;
        md?: MARGINS;
        lg?: MARGINS;
        xl?: MARGINS;
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
