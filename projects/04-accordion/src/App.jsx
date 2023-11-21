import { useState } from "react"
import questions from "./data"


function App() {

  return (
    <>
      <div>
        {questions.map((data) => {
          return (
            <div key={data.id}>
              <span>{data.title}</span>
              <button>+</button>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default App
