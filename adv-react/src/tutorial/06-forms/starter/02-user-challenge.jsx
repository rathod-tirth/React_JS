import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [userData, setUserData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    if (!name) return;
    setUserData([...userData, { id: Date.now().toString().slice(9, 13), name }]);
    setName("");
  };

  const handleRemove = (id) => {
    const newUserData = userData.filter((val) => val.id !== id);
    setUserData(newUserData);
  };

  return (
    <div>
      <form className='form'>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' onChange={e => setName(e.target.value)} value={name} />
        </div>

        <button type='submit' className='btn btn-block' onClick={(e) => handleSubmit(e)}>
          submit
        </button>
      </form>
      {/* render users below */}
      {
        userData.map((val) => {
          return (
            <div key={val.id}>
              <h4><span>{val.id}. </span><span>{val.name}</span></h4>
              <button className="btn" onClick={() => handleRemove(val.id)}>Remove</button>
            </div>
          );
        })
      }
    </div>
  );
};
export default UserChallenge;


/**
 * here we setup a controlled input for name input, then we added the
 * functionality to add new user in the user array and render them
 * and additionally we also added the remove btn for users
 */