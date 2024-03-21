import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><Home /></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
