import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [frame, setFrame] = useState('react');

  const handleCheck = (e) => {
    setShipping(e.target.checked);
  };
  const handleSelect = (e) => {
    setFrame(e.target.value);
  };

  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input type="checkbox" name="shipping" id="shipping" checked={shipping} onChange={handleCheck} />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select name="framework" id="framework" value={frame} onChange={handleSelect}>
            {frameworks.map((data) => {
              return <option key={data}>{data}</option>
            })}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;

// checkbox value is given to the checked attribute
// and is in boolean value