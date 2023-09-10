import { useState } from "react"

const Object = () => {
   const [data, setData] = useState(
      {
         name: "Peter",
         age: 20,
         hobby: "Sleeping"
      }
   );
   // initial state value as an object

   const { name, age, hobby } = data;
   // destructuring

   const update = () => {
      setData(
         {
            name: "John",
            age: 28,
            hobby: "Watching Movies"
         }
      );
      // setData({ ...data, name: "John" });
      // use spread op if you want to update few properties
   };
   // updating the data with set function

   return (
      <>
         <h4>{name}</h4>
         <h4>{age}</h4>
         <h4>Enjoys: {hobby}</h4>
         <button type="button" className="btn" onClick={() => update()}>Click</button>
      </>
   )
}
export default Object
