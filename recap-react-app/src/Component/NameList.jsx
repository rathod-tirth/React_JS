function NameList() {
   const names = ["Tirth", "Devanshu", "Jay"]
   return (
      <div>
         <ul>
            {names.map((a, index) => {
               return <li key={index}>{a}</li>
            })}
         </ul>
      </div>
   )
}
export default NameList