import React, { useEffect, useState } from 'react'
import { list, shortList } from './data'
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
   const [data, setData] = useState(list)
   const [currentPerson, setCurrentPerson] = useState(0)

   const handlePrev = () => {
      if (currentPerson > 0) {
         setCurrentPerson(currentPerson - 1)
      } else {
         setCurrentPerson(data.length - 1)
      }
   }

   const handleNext = () => {
      if (currentPerson < data.length - 1) {
         setCurrentPerson(currentPerson + 1)
      } else {
         setCurrentPerson(0)
      }
   }

   useEffect(() => {
      let sliderInterval = setInterval(() => { handleNext() }, 5000)
      return () => { clearInterval(sliderInterval) }
   }, [currentPerson])

   return (
      <div>
         <div className='slider-container' >
            {data.map((item, index) => {
               if (currentPerson === index) {
                  return (
                     <article className='slide' key={item.id} >
                        <img src={item.image} alt={item.name} className='person-img' />
                        <h5 className='name'>{item.name}</h5>
                        <p className='title'>{item.title}</p>
                        <p className='text'>{item.quote}</p>
                        <FaQuoteRight className='icon' />
                     </article>
                  )
               }
            })}
         </div>
         <button className='prev' onClick={() => handlePrev()}><FiChevronLeft /></button>
         <button className='next' onClick={() => handleNext()}><FiChevronRight /></button>
      </div>
   )
}

export default Carousel