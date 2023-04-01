import React from 'react';

const Main = (props) => {
  const { children } = props;

  return (
    <>
      <main className='main'>
        {children}
      </main>
    </>
  );
};

export default Main;