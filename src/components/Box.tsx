import * as React from 'react';
import { classify } from '../helpers/classify';
import { BreakpointClasses, breakpoints } from '../helpers/breakpoints';
import { computeClass } from '../helpers/computeClass';

const radiuses = ['sm', 'md', 'lg', 'full'] as const;
type RADIUS = keyof { [key in typeof radiuses[number]]: string };

const RADIUS: {
  [key: string]: string;
} = {};

const RADIUSES: BreakpointClasses = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

radiuses.forEach((radius) => {
  const prefix = 'rounded';
  RADIUS[radius] = `${prefix}-${radius}`;

  breakpoints.forEach((breakpoint) => {
    RADIUSES[breakpoint][radius] = `${breakpoint}:${prefix}-${radius}`;
  });
});

interface Props {
  backgroundColor?: React.HTMLAttributes<HTMLDivElement>['className'] | string;
  textColor?: React.HTMLAttributes<HTMLDivElement>['className'] | string;
  borderColor?: React.HTMLAttributes<HTMLDivElement>['className'] | string;
  borderWidth?: number;
  cornerRadius?:
    | RADIUS
    | {
        default?: RADIUS;
        sm?: RADIUS;
        md?: RADIUS;
        lg?: RADIUS;
        xl?: RADIUS;
      };
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Box: React.FC<Props> = ({
  backgroundColor,
  textColor,
  borderColor,
  borderWidth,
  cornerRadius,
  className,
  style,
  children,
}) => {
  const computedClasses: (string | undefined)[] = [
    !backgroundColor?.includes('#') ? backgroundColor : undefined,
    !textColor?.includes('#') ? textColor : undefined,
    !borderColor?.includes('#') ? borderColor : undefined,
    computeClass(cornerRadius, RADIUS, RADIUSES),
  ];

  return (
    <div
      className={classify([...computedClasses, className])}
      style={{
        backgroundColor: backgroundColor?.includes('#')
          ? backgroundColor
          : undefined,
        color: textColor?.includes('#') ? textColor : undefined,
        borderColor: borderColor?.includes('#') ? borderColor : undefined,
        borderWidth,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
