import React from 'react'
import MenuItems from './MenuItem'

function Menu({ menuData }) {
   return (
      <div className='section-center'>
         {menuData.map((item) => {
            return (<MenuItems key={item.id} {...item} />)
         })}
      </div>
   )
}

export default Menu