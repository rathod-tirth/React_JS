function Cate({ cateData }) {
   return (
      <div>
         {cateData.map((data) => {
            return (
               <button className="btn">{data}</button>
            );
         })}
      </div>
   )
}
export default Cate