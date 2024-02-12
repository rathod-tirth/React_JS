import { useState } from "react"
import withLogger from "./withLogger"

function HelloComponent() {

   const [count, setCount] = useState(0)

   return (
      <>
         <div>Hello, React Recap!!</div>
         <button onClick={() => setCount(count + 1)}>Click</button>
         <p>{count}</p>
      </>
   )
}
export default withLogger(HelloComponent)