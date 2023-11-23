import SingleQuestion from "./SingleQuestion"

function Question({ data, showInfo, toggleInfo }) {
   return (
      <div className="container">
         <h1 className="title">Questions</h1>
         {data.map((data) => {
            return <SingleQuestion key={data.id} data={data} showInfo={showInfo} toggleInfo={toggleInfo} />
         })}
      </div>
   )
}
export default Question