import * as React from 'react';
import { classify } from '../helpers/classify';
import { BreakpointClasses, breakpoints } from '../helpers/breakpoints';

const modes = ['hidden', 'block', 'flex'];

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

interface Props {
  mode?:
    | keyof typeof MODE
    | {
        default?: keyof typeof MODES.default;
        sm?: keyof typeof MODES.sm;
        md?: keyof typeof MODES.md;
        lg?: keyof typeof MODES.lg;
        xl?: keyof typeof MODES.xl;
      };
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Visible: React.FC<Props> = ({ mode, className, style, children }) => {
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

  return (
    <div className={classify([computedClass, className])} style={style}>
      {children}
    </div>
  );
};

export default Visible;
