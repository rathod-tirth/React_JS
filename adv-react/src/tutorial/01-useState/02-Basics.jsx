import { useState } from "react";
// importing useState

const Basics = () => {
  // console.log(useState("Tiger"));

  const [count, setcount] = useState(0);
  // useState setup

  return (
    <>
      <h2>You clicked {count} times</h2>
      <button className="btn" onClick={() => setcount(count + 1)}>Click me</button>
    </>
  );
};

export default Basics;

/**
 * - useState is use to change the state of an instance
 * - useState has two parameters:
 *      first: initial value of our state variable
 *      second: set function which controls our variable
 * - using array destructing is the easiest way to use useState
 * - through set function we manipulate the state value as desired
 * - useState re-renders the whole component every time the set function is called
 * - if initial state value is interger you can set that to string or any other type with any value, there is no restriction
 * 
 * - onclick in react invokes the referal function on initial mount so, use callback function before it
 */