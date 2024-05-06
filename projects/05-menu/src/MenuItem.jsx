import React from 'react'

function MenuItems({ title, price, img, desc }) {
   return (
      <article className='menu-item'>
         <img src={img} alt={title} className='img' />
         <div className='item-info'>
            <header>
               <h2>{title}</h2>
               <span className='item-price'>${price}</span>
            </header>
            <p className='item-text'>{desc}</p>
         </div>
      </article>
   )
}

export default MenuItems