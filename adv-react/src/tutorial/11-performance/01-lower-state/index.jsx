import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Counter from './Counter';

const LowerState = () => {
  const [people, setPeople] = useState(data);
  return (
    <section>
      <Counter />
      <List people={people} />
    </section>
  );
};
export default LowerState;


/**
 * When the parent component re-render the child component also renders.
 * Simple solution would be to spilt your code in components.
 */