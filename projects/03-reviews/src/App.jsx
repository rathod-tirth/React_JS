import { useState } from "react";
import reviews from "./data";
import { FaBeer } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const Next = () => {
    if (index === reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  // const Prev = (num) => {
  //   if (num === 0) {
  //     setIndex(reviews.length);
  //   } else {
  //     setIndex(index - 1);
  //   }
  // };

  return (
    <>
      <h2>Reviews Starter</h2>
      <div>
        <h3>{name}</h3>
        <h4>{job}</h4>
        <img src={image} alt={name} />
        <p>{text}</p>
      </div>
      {/* <button onClick={() => Prev()}>Prev</button> */}
      <button onClick={() => Next()}>Next</button>
    </>
  );
}

export default App
