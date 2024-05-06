import React from 'react'
import JobDuties from './JobDuties'

const JobInfo = ({ data, currentItem }) => {
   const { id, company, title, dates, duties } = data[currentItem]

   return (
      <>
         <article className='job-info' key={id}>
            <h3>{title}</h3>
            <span className='job-company'>{company}</span>
            <p className='job-date'>{dates}</p>
            <JobDuties duties={duties} />
         </article>
      </>
   )
}

export default JobInfo