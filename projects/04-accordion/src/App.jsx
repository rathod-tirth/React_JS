import { useState } from "react"
import questions from "./data"
import Question from "./Question";

function App() {
  const [data, setData] = useState(questions);
  const [showInfo, setShowInfo] = useState(null);

  const toggleInfo = (id) => {
    // setShowInfo(id);
    const newId = showInfo === id ? null : id;
    setShowInfo(newId);
  };

  return (
    <>
      <Question data={data} showInfo={showInfo} toggleInfo={toggleInfo} />
    </>
  )
}

export default App
