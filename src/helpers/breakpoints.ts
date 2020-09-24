export type Breakpoint = 'default' | 'sm' | 'md' | 'lg' | 'xl';
export type Breakpoints = Breakpoint[];
export const breakpoints: Breakpoints = ['default', 'sm', 'md', 'lg', 'xl'];

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
