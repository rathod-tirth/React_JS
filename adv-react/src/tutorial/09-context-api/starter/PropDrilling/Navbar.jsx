import { useState } from "react"
import Navlink from "./Navlink"

function Navbar() {
   const [user, setUser] = useState({ name: "Tirth" });

   const logOut = () => {
      setUser(null);
   };
   return (
      <nav className="navbar">
         <h5>Navbar</h5>
         <Navlink user={user} logOut={logOut} />
      </nav>
   )
}
export default Navbar