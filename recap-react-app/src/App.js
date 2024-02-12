import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to={"/"}>Home</Link> | <Link to={"about"}>About</Link>
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} ></Route>
        <Route path="/about" exact element={<About />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
