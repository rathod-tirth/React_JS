import Title from "./Title"
import { useState } from "react"
import menu from "./data"

function App() {
  const [data, setData] = useState(menu);

  return (
    <div className="container">
      <Title />
    </div>
  )
}
export default App
