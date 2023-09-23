import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => { setToggle(!toggle) }}>Click</button>
      {toggle && <AnyComponent />}
    </>
  );
};

const AnyComponent = () => {
  useEffect(() => {
    console.log(`Hello`);
    setInterval(() => {
      console.log(`Hello from interval`);
    }, 1000)
  }, [])
  return <h1>Hello There</h1>
};

export default CleanupFunction;
