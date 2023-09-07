import { useState } from "react"

const Gotcha = () => {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState(0);

  const update = () => {
    setValue((currentState) => {
      const newState = currentState + 1;
      console.log(newState);
      return newState;
    });
    // console.log(value);
  };

  const updateDelay = () => {
    setTimeout(() => {
      setTime((currentState) => currentState + 1);
    }, 2000)
  }
  return (
    <>
      <h4>{value}</h4>
      <button type="button" className="btn" onClick={() => update()}>Click</button><br /><br />
      <h4>{time}</h4>
      <button type="button" className="btn" onClick={() => updateDelay()}>Click : 3s delay</button>
    </>
  )
}
export default Gotcha
