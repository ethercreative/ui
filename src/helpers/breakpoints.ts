export type Breakpoint = 'default' | 'sm' | 'md' | 'lg' | 'xl';
export type Breakpoints = Breakpoint[];

export type BreakpointClasses = {
  default: {
    [key: string]: string;
  };
  sm: {
    [key: string]: string;
  };
  md: {
    [key: string]: string;
  };
  lg: {
    [key: string]: string;
  };
  xl: {
    [key: string]: string;
  };
};

export const breakpoints: Breakpoints = ['default', 'sm', 'md', 'lg', 'xl'];

export const defaultBreakpoints = {
  default: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};
