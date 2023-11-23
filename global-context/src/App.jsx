import { useGlobalContext } from "./Context"

function App() {
  const { count, setCount } = useGlobalContext();
  return (
    <>
      <h2>Contex API</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h4>{count}</h4>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  )
}

export default App
