import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState);
  const [text, setText] = useState('random title');                     // if first parameter vijay, then 2nd should be setVijay
  const handleClick = () => {
    if (text === 'random title'){
      setText(2011);
    }
    else{
      setText('random title');
    }
    
    
  }
  return (
    <>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}> change title </button>
    </>
  );
};

export default UseStateBasics;
