import React, { useState } from 'react'
import Title from './Title'
import data from './data'
import Menu from './Menu'
import Category from './Category'

function App() {
  const allCate = ["all", ...new Set(data.map((item) => item.category))]

  const [menuData, setMenuData] = useState(data)
  const [cate, setCate] = useState(allCate)

  const handleFilter = (val) => {
    if (val === 'all') {
      setMenuData(data)
      return;
    }
    const newMenuData = data.filter((item) => item.category === val)
    setMenuData(newMenuData)
  }

  return (
    <main>
      <section className='menu'>
        <Title />
        <Category cate={cate} handleFilter={handleFilter} />
        <Menu menuData={menuData} />
      </section>
    </main>
  )
}

export default App
