import { useState } from "react";
import { data } from "../../../data";

const Array = () => {
  const [people, setPeople] = useState(data);

  const remove = (id) => {
    let newList = people.filter((ppl) => ppl.id !== id);
    // gives a list of array
    setPeople(newList);
    // re-rendering the component with the new elements
  };

  return (
    <>
      <div className="container">
        {people.map((ppl) => {
          const { id, name } = ppl;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button className="btn" onClick={() => { remove(id) }}>Remove</button>
            </div>
          );
        })}
        <button className="btn" onClick={() => { setPeople([]) }} style={{ marginTop: '2rem' }} >Clear All</button>
      </div>
    </>
  );
};

export default Array;
