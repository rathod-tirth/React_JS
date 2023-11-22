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
