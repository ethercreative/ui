import * as React from 'react';

interface Props {
  ratio:
    | '16/1'
    | '16/2'
    | '16/3'
    | '16/4'
    | '16/5'
    | '16/6'
    | '16/7'
    | '16/8'
    | '16/9'
    | '16/10'
    | '16/11'
    | '16/12'
    | '16/13'
    | '16/14'
    | '16/15'
    | '16/16';
}

const Aspect: React.FC<Props> = ({ ratio, children }) => {
  const parts = ratio.split('/');
  const _ratio = (Number(parts[1]) / Number(parts[0])) * 100;

  return (
    <div
      className='relative overflow-hidden'
      style={{ paddingBottom: `${_ratio}%` }}
    >
      <div className='absolute inset-0'>{children}</div>
    </div>
  );
};

export default Aspect;
