import React from 'react'

function Category({ cate, handleFilter }) {

   return (
      <div className='btn-container'>
         {cate.map((item) => (
            <button key={item} className='btn' onClick={() => handleFilter(item)} >{item}</button>
         ))}
      </div>
   )
}

export default Category