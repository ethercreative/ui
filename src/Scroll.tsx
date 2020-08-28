import React from 'react';

const Scroll: React.FC = ({ children }) => (
  <div className='overflow-auto scrolling-touch max-w-full max-h-full'>
    {children}
  </div>
);

export default Scroll;
