import MenuItem from "./MenuItem"

function Menu({ data }) {
   return (
      <div className="menu-item">
         {data.map((data) => {
            return (
               <MenuItem key={data.id} {...data} />
            );
         })}
      </div>
   )
}
export default Menu