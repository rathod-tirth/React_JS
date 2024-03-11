import { useReducer } from 'react';
import { data } from '../../data';
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./action"
import reducer from './reducer';

const defaultState = {
  people: data,
}

const ReducerBasics = () => {

  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }

  const resetList = () => {
    dispatch({ type: RESET_LIST })
  }

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
      {state.people.length ? (
        <button className='btn' style={{ marginTop: '2rem' }} onClick={clearList} >
          Clear
        </button>
      ) : (
        <button className='btn' style={{ marginTop: '2rem' }} onClick={resetList} >
          Reset
        </button>
      )}

    </div>
  );
};

export default ReducerBasics;


/**
 * useReducer is used for state management, it is an hook provided by react itself.

 * useReducer takes two arguments. 1. reducer function, 2. defaultState
 * defaultstate is where all the state values are stored.
 * The reducer function is used to manipulate state values.

 * useReducer returns two values. 1. state 2. dispatch
 * Through state you can access all the state values.
 * Through dispatch you can invoke a action from the reducer function.

 * The reducer function passed in useReducer takes has two parameter
 * 1. current state value, 2. action

 * We use dispatch function to pass the action type in reducer function we check for 
  the correct action type and on based on the action type the we will update the state.

 * Whatever the reducer function will return will be the new state value.
 * You can setup a default state or throw an error for error handling in reducer function.

 */