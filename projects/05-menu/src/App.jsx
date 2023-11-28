import Title from "./Title"
import { useState } from "react"
import menu from "./data"
import Menu from "./Menu";
import Cate from "./Cate";
const allCate = ["all", ...new Set(menu.map(data => data.category))];

function App() {
  const [data, setData] = useState(menu);

  const [cateData, setCateData] = useState(allCate);

  return (
    <main>
      <Title />
      <Cate cateData={cateData} />
      <Menu data={data} />
    </main>
  )
}
export default App
