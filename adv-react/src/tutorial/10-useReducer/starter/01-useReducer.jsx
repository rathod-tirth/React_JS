import { useReducer } from 'react';
import { data } from '../../../data';

const CLEAR_LIST = 'CLEAR_LIST';
const RESET_LIST = 'RESET_LIST';
const REMOVE_ITEM = 'REMOVE_ITEM';

const defaultState = {
  people: data,
}

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data }
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(person => person.id !== action.payload.id)
    return { ...state, people: newPeople }
  }
  throw new Error(`No matching "${action.type}" - action.type`);
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
 * defaultstate is where all the state values are stored
 * the reducer function is used to manipulate state values

 * useReducer returns two values. 1. state 2. dispatch
 * through state you can access all the state values
 * through dispatch you can invoke a action from the reducer function
 * 
 * the reducer function passed in useReducer takes has two parameter
 * 1. current state value, 2. action
 * 
 * we use dispatch function to pass the action type
 * in reducer function we check for the correct action type and
 * on based on the action type the we will update the state
 * 
 * whatever the reducer function will return will be the new state value
 * now due to that we can set up a default return statement which return the current state
 * or we can throw an error for better bug solving 
 * if there is action which is not handled in the reducer function
 */