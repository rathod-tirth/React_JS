import { Suspense, lazy, useState, useTransition } from 'react';
const SlowComponent = lazy(() => import('./SlowComponent'))
const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false)
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);

    // slow down CPU
    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src='/vite.svg' alt='' />
          </div>
        );
      });
      setItems(newItems);
    })
  };
  return (
    <section>
      <form className='form'>
        <input
          type='text'
          className='form-input'
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {isPending ? (<h4>Loading...</h4>) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginTop: '2rem',
          }}
        >
          {items}
        </div>)}
      <button className='btn' onClick={() => setShow(!show)} >Toggle</button>
      {show &&
        <Suspense fallback={<h4>Loading...</h4>} >
          <SlowComponent />
        </Suspense>
      }
    </section>
  );
};
export default LatestReact;


// useTransition keeps the UI interactive while the data is being loaded 
// It is very useful for searhbar

// Suspense "suspend" rendering of a component until some data has been fetched, 
// and display a fallback UI in the meantime. 

// This makes it easier to handle asynchronous data loading and provide a smooth user 
// experience in React application.