import React from 'react'

const BtnContainer = ({ data, currentItem, setCurrentItem }) => {
   return (
      <div className='btn-container'>
         {data.map((item, index) => {
            return (
               <button key={item.id} onClick={() => setCurrentItem(index)} className={index === currentItem ? 'job-btn active-btn' : 'job-btn'} >{item.title}</button>
            )
         })}
      </div>
   )
}

export default BtnContainer