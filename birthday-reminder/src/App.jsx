import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <div className="container"></div>
    </>
  );
};
export default App;
