import { useState } from "react";

const Basics = () => {
  // console.log(useState("Tiger"));

  let [count, setcount] = useState(0);

  return (
    <>
      <h2>You clicked {count} times</h2>
      <button className="btn" onClick={() => { setcount(count + 1); console.log(count); }}>Click me</button>
    </>
  );
};

export default Basics;
