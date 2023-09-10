import { useState, useEffect } from 'react';

const Basics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();

  useEffect(() => {
    console.log("hello from useEffect");
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default Basics;

/**
 * useEffect is another react hooks
 * useEffect is called every time the component renders
 * It has two arguments:
 *    first: a callback function
 *    second: array dependency
 * 
 */