import { useState } from "react"

function Tour({ id, image, info, name, price, removeTour }) {
   const [isMore, setIsMore] = useState(false);
   return (
      <article className="single-tour">
         <img src={image} alt={name} className="img" />
         <span className="tour-price">₹{price}</span>
         <div className="tour-info">
            <h5>{name}</h5>
            <p>
               {isMore ? info : `${info.slice(0, 200)}...`}
               <button className="info-btn" onClick={() => { setIsMore(!isMore) }}>{isMore ? `Show Less` : `Read More`}</button>
            </p>
            <button className="delete-btn btn-block btn" onClick={() => { removeTour(id) }}>Remove</button>
         </div>
      </article>
   )
}
export default Tour