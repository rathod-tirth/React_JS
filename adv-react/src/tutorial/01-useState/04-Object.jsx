import { useState } from "react"

const Object = () => {
   const [data, setData] = useState(
      {
         name: "Peter",
         age: 20,
         hobby: "Sleeping"
      }
   );

   const { name, age, hobby } = data;

   const update = () => {
      setData(
         {
            name: "John",
            age: 28,
            hobby: "Watching Movies"
         }
      );
      // setData({ ...data, name: "John" });
   };

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
