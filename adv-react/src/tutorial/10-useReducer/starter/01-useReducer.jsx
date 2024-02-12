import React, { useReducer, useState } from 'react';
import { data } from '../../../data';

const defaultState = {
  people: data,
  isLoading: false
}

const reducer = (state, action) => {
  if (action.type === "CLEAR") {
    return { ...state, people: [] }
  }
  if (action.type === "RESET") {
    return { ...state, people: data }
  }
}

const ReducerBasics = () => {

  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const resetList = () => {
    // setPeople(data);
    dispatch({ type: "RESET" })
  };

  const clearList = () => {
    // setPeople([]);
    dispatch({ type: "CLEAR" })
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <br />
      {state.people[1] ?
        <button className='btn' onClick={() => clearList()} style={{ marginTop: '1rem' }} >Clear</button> :
        <button className='btn' onClick={() => resetList()} style={{ marginTop: '1rem' }} >Reset</button>
      }
    </div>
  );
};

export default ReducerBasics;
