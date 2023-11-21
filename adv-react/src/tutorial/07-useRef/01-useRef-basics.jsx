import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0);

  const refContainer = useRef(null);
  const isMounted = useRef(false);
  const refEmail = useRef(null);
  // console.log(refContainer);

  // doesn't trigger re-render so the useEffect will not go in an infinite loop
  useEffect(() => {
    refContainer.current.focus();
  });

  // logic to skip the code on initial render and trigger it on re-renders
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log(refContainer);
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = refContainer.current.value;
    const email = refEmail.current.value;
    console.log(name, email);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' id='name' className='form-input' ref={refContainer} />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' id='email' className='form-input' ref={refEmail} />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;


/**
 * useRef
 * does not trigger re-renders
 * target DOM nodes/elements
 * preserve values between renders
 * 
 * ref is a react attribute which gives access to the useRef of that element
 * useRef values can be accessed and manipulated with the current argument
 */