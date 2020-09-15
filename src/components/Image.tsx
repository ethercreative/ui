import * as React from 'react';
import { classify } from '../helpers/classify';

interface Props {
  src: string;
  alt: string;
  loading?: 'eager' | 'lazy';
  width?: number | string;
  height?: number | string;
  display?: 'inline' | 'fill';
  fill?: 'cover' | 'contain';
  className?: React.HTMLAttributes<HTMLImageElement>['className'];
  style?: React.HTMLAttributes<HTMLImageElement>['style'];
}

const Image: React.FC<Props> = ({
  src,
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

  return (
    <img
      src={src}
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
