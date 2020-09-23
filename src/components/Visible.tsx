import * as React from 'react';
import { classify } from '../helpers/classify';
import { BreakpointClasses, breakpoints } from '../helpers/breakpoints';

const modes = ['hidden', 'block', 'flex'] as const;
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

interface Props {
  mode?:
    | MODES
    | {
        default?: MODES;
        sm?: MODES;
        md?: MODES;
        lg?: MODES;
        xl?: MODES;
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
