import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FaAngleDoubleRight } from 'react-icons/fa';

const JobDuties = ({ duties }) => {
   return (
      <>
         {duties.map((item) => {
            return (
               <div key={uuidv4()} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                  <p>{item}</p>
               </div>
            )
         })}
      </>
   )
}

export default JobDuties