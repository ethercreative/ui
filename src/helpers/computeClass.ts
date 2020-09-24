import { BreakpointClasses } from './breakpoints';

export const computeClass = (
  property: any | undefined,
  single: { [key: string]: string },
  multiple: BreakpointClasses,
) => {
  if (!property) {
    return;
  }

  console.log(property, single, multiple);

  let className = '';

  if (typeof property === 'string') {
    className = single[property];
  } else {
    Object.keys(property).forEach((key) => {
      className = multiple[key][property[key]];
    });
  }

  return className;
};
