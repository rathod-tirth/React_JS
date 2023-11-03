import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <>
      <form className="form">
        <h4>Controlled Inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">name</label>
          <input type="text" onChange={e => setName(e.target.value)} value={name} id="name" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">email</label>
          <input type="email" onChange={e => setEmail(e.target.value)} value={email} id="email" className="form-input" />
        </div>
        <button type="submit" className="btn btn-block" onClick={handleSubmit}>submit</button>
      </form>
    </>
  );
};
export default ControlledInputs;
