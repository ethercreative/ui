import * as React from 'react';
import { classify } from '../helpers/classify';

interface Props {
  src?: string;
  srcSet?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  alt: string;
  loading?: 'eager' | 'lazy';
  width?: number | string;
  height?: number | string;
  display?: 'inline' | 'fill';
  fill?: 'cover' | 'contain';
  className?: React.HTMLAttributes<HTMLImageElement>['className'];
  style?: React.HTMLAttributes<HTMLImageElement>['style'];
}

const breakpoints = {
  sm: '640w',
  md: '768w',
  lg: '1024w',
  xl: '1480w',
};

const Image: React.FC<Props> = ({
  src,
  srcSet,
  alt,
  loading = 'lazy',
  width,
  height,
  display = 'inline',
  fill = 'cover',
  className,
  style,
}) => {
  let computedClass = '';

  if (display === 'fill') {
    computedClass += ' absolute inset-0 w-full h-full';
  }

  if (fill === 'cover') {
    computedClass += ' object-cover';
  }

  if (fill === 'contain') {
    computedClass += ' object-contain';
  }

  const _srcSet: string[] = [];

  Object.keys(breakpoints).forEach((key) => {
    if (srcSet[key]) {
      _srcSet.push(`${srcSet[key]} ${breakpoints[key]}`);
    }
  });

  return (
    <img
      src={src}
      srcSet={_srcSet.join(', ') ?? undefined}
      alt={alt}
      loading={loading}
      decoding='async'
      width={width}
      height={height}
      className={classify([computedClass, className])}
      style={style}
    />
  );
};

export default Image;
