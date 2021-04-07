import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth);
  console.log(size);
  const checksize = () => {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    console.log('use effect');
    window.addEventListener('resize',checksize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize',checksize);
    }
  })
  console.log('render');
  return (
    <>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
