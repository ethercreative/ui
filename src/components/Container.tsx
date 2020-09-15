import * as React from 'react';

const Container: React.FC = ({ children }) => (
  <div className='xl:container w-full mx-auto px-10'>{children}</div>
);

export default Container;
