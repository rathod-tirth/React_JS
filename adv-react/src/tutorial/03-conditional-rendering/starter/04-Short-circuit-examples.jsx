import { useState } from 'react';

const Examples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('Tirth');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <h2>{text || "Hello There"}</h2>
      {text && (
        <div>
          <h2>Greetings</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <ExComponent name={user.name} />}
      <h2>Ternary Operators</h2>
      <button className='btn'>{isEditing ? "edit" : "add"}</button>
      {user ? (
        <div>
          <h2>User {user.name} does exist</h2>
        </div>
      ) : (
        <div>
          <h2>User does not exist</h2>
        </div>
      )}
    </>
  );
};

const ExComponent = ({ name }) => {
  return (
    <div>
      <h2>Greetings</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default Examples;
