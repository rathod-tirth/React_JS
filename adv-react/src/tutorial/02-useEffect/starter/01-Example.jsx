import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const loop = () => {
    console.log("Hello");
    setValue(value + 1);
  };

  loop()

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => loop()}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
