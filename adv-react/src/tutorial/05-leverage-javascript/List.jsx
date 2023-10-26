import { people } from "../../data"
import Person from "./Person";

function List() {
   return (
      <div>
         {people.map((data) => {
            return (
               <Person key={data.id} {...data} />
            );
         })}
      </div>
   )
}
export default List