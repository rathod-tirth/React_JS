import { useState } from 'react';

const Example = () => {
  const [value, setValue] = useState(0);

  const loop = () => {
    console.log("Hello");
    // triggers infinit loop
    // setValue(value + 1);
  };

  loop()

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default Example;

/**
 * since useState re-renders the component on update
 * an setState in a function which is invoked on mount will create an infinite loop
 * 
 * in scenario like this useEffect is used
 */
