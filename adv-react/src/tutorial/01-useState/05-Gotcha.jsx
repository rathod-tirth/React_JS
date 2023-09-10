import { useState } from "react"

// useState does not updates the value instantly
// so if your programs depends on useState to update instally use this functionality instead

const Gotcha = () => {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState(0);

  const update = () => {
    setValue((currentState) => {
      const newState = currentState + 1;
      console.log(newState);
      // loging and returning new value so they are same when the event occurs

      return newState;
    });
    // console.log(value);

    // you can use set function with a callback function
    // which has a parameter as current value of the state

  };

  const updateDelay = () => {
    setTimeout(() => {
      setTime((currentState) => currentState + 1);
    }, 2000)
  }
  // ex. where we need to access the newstate value instantly so the time delay actually works

  return (
    <>
      <h4>{value}</h4>
      <button type="button" className="btn" onClick={() => update()}>Click</button><br /><br />
      <h4>{time}</h4>
      <button type="button" className="btn" onClick={() => updateDelay()}>Click : 3s delay</button>
    </>
  )
}
export default Gotcha;
