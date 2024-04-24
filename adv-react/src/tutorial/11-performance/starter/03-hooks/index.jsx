import { useCallback, useState } from 'react';
import { data } from '../../../../data';
import List from './List';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removePerson = useCallback((id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }, [people])

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;

/**
 * memo only updates the component when the props update.

 * re-render of the component causes the removePerson function to re-declare, 
  this makes the js think the prop changed of the List component and makes 
  the List component re-render as well even with the memo.

 * useCallback memoize the function and only re-render the function if the dependency 
  array changes.

 * Nothing insides the useCallback function will change without the dependency array.

 * Now the function only re-render/changes when the dependency array changes, even if 
  the function itself updates the function will not change.
 */