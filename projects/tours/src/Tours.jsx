import Tour from "./Tour"

function Tours({ tours }) {
   const handleRemove = (id) => {
      const newTours = tours.filter(data => data.id !== id);
   };
   return (
      <>
         {tours.map((data) => {
            return (
               <div key={data.id}>
                  <Tour tour={data} />
                  <button className="btn">Remove</button>
               </div>
            );
         })}
      </>
   )
}
export default Tours