import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <form className='form'>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name="name" value={user.name} onChange={handleChange} />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name="email" value={user.email} onChange={handleChange} />
        </div>
        {/* password */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' name="password" value={user.password} onChange={handleChange} />
        </div>

        <button type='submit' className='btn btn-block' onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;

/**
 * Instead of making different state for different input we make a object in the state
 * which allows us to make a single function as well
 * 
 * where we target the object key with the help of e.target and can set its value dynamically
 * 
 * Note: name attribute needs to be same as object key
 */