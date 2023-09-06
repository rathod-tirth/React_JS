import { useState } from "react";

const Basics = () => {
  // console.log(useState("Tiger"));

  const [count, setcount] = useState(0);

  return (
    <>
      <h2>You clicked {count} times</h2>
      <button className="btn" onClick={() => setcount(count + 1)}>Click me</button>
    </>
  );
};

export default Basics;
