const ErrorExample = () => {
  let count = 0;
  return (
    <>
      <p>{count}</p>
      <button onClick={() => count + 1}>+</button>
    </>
  );
};

export default ErrorExample;
