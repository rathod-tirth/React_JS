import { useState } from "react";
import { data } from "../../../data";

const Array = () => {
  const [people, setPeople] = useState(data);

  const keep = (id) => {
    let newList = people.filter((ppl) => ppl.id === id);
    setPeople(newList);
  };

  const remove = (id) => {
    let newList = people.filter((ppl) => ppl.id !== id);
    setPeople(newList);
  };

  return (
    <>
      <div className="container">
        {people.map((ppl) => {
          const { id, name } = ppl;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button className="btn" onClick={() => { keep(id) }} style={{ margin: "0 1rem" }}>Keep</button>
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
