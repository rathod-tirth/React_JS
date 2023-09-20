import { useState } from "react";

const ToggleChallenge = () => {
  const [isToggle, setIsToggle] = useState(true);

  return (
    <>
      <button className="btn" onClick={() => setIsToggle(!isToggle)}>Click</button>
      {isToggle && (
        <h2 className="alert alert-success">Hello There</h2>
      )}
    </>
  );
};

export default ToggleChallenge;
