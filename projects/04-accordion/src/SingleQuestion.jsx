
function SingleQuestion({ data, showInfo, toggleInfo }) {

   return (
      <div className="question">
         <header>
            <h5>{data.title}</h5>
            <button className="question-btn" onClick={() => toggleInfo(data.id)}>
               {showInfo === data.id ? "-" : "+"}
            </button>
         </header>
         {showInfo === data.id && <p>{data.info}</p>}
      </div>
   )
}
export default SingleQuestion