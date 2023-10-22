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
    // console.log(`Hello`);

    // const someId = setInterval(() => {
    //   console.log(`Hello from interval`);
    // }, 1000)
    // return () => clearInterval(someId);

    const someFunc = () => {
      // some logic
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, [])
  return <h1>Hello There</h1>
};

export default CleanupFunction;

/**
 * here we have simple toggle for a component at the top
 * the AnyComponent have useEffect, which is invoke every time the component is mount
 * and this causes the setInterval to stack and go forever even if the component is unmount
 * 
 * To overcome this we add an cleanup function of in the return
 * so when the component unmounts the cleanup function gets invoked
 * 
 * this is a part of an Functional Component LifeCycle useEffect return is invoked when 
 * the component unmounts, we use that and add our cleanup function inside return statement
 */
