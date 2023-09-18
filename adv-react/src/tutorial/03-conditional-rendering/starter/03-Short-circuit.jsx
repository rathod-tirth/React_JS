import { useState } from 'react';

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("james");

  setTimeout(() => {
    setText(`Greetings`);
    setName(`susan`);
  }, 3000)

  return (
    <>
      <h4>{text || `Hello There`}</h4>
      <h4>{text && `Hello There`}</h4>
      <h4>{name || `Hello There`}</h4>
      <h4>{name && `Hello There`}</h4>
    </>
  );
};
export default ShortCircuit;

/**
 * if condition doesn't work inside jsx
 * so we use short circuit evalution
 */