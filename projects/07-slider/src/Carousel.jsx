import React from 'react'
import { list, shortList } from './data'
import { useState } from 'react'

const Carousel = () => {
   const [data, setData] = useState(shortList)

   return (
      <div>Carousel</div>
   )
}

export default Carousel