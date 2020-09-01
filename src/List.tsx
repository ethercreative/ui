import * as React from 'react';

const MODE = {
  disc: 'list-disc',
  decimal: 'list-decimal',
  none: 'list-none',
};

const GAP = {
  '1': 'gap-1',
  '2': 'gap-2',
  '3': 'gap-3',
  '4': 'gap-4',
  '5': 'gap-5',
  '6': 'gap-6',
  '8': 'gap-8',
  '10': 'gap-10',
  '12': 'gap-12',
  '16': 'gap-16',
  '20': 'gap-20',
  '24': 'gap-24',
  '32': 'gap-32',
  '40': 'gap-40',
  '48': 'gap-48',
  '56': 'gap-56',
  '64': 'gap-64',
};

interface Props {
  order?: 'unordered' | 'ordered';
  mode?: keyof typeof MODE;
  gap?: keyof typeof GAP;
  className?: React.HTMLAttributes<HTMLUListElement>['className'];
  style?: React.HTMLAttributes<HTMLUListElement>['style'];
}

const List: React.FC<Props> = ({
  order = 'unordered',
  mode = 'none',
  gap,
  className,
  style,
  children,
}) => {
  let computedClass = '';

  if (mode) {
    computedClass += ` ${MODE[mode]}`;
  }

  if (gap) {
    computedClass += ` ${GAP[gap]}`;
  }

  const compiledClass = `${computedClass} ${className}`;

  switch (order) {
    case 'ordered':
      return (
        <ol className={compiledClass} style={style}>
          {children}
        </ol>
      );

    default:
      return (
        <ul className={compiledClass} style={style}>
          {children}
        </ul>
      );
  }
};

export default List;
