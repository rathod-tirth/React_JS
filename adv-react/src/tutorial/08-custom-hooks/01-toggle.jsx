import useTooggle from "./useTooggle";

const ToggleExample = () => {
  const { show, toggle } = useTooggle(false);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;

// use "use" before creating a custom hook
// you can use other hooks inside your custom hook
// custom hook allows reusability of same functionality over and over again