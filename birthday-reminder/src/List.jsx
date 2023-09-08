import Person from "./Person";

const List = ({ prop }) => {
   return (
      <section>
         {
            prop.map((ppl) => {
               return (
                  <Person {...ppl} key={ppl.id} />
               );
            })
         }
      </section>
   )
}
export default List