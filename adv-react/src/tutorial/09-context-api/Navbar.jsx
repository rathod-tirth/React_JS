import { createContext, useContext, useState } from "react"
import Navlink from "./Navlink"

export const NavContext = createContext();

export const useNavContext = () => useContext(NavContext);

function Navbar() {
   const [user, setUser] = useState({ name: "Tirth" });

   const logOut = () => {
      setUser(null);
   };
   return (
      <NavContext.Provider value={{ user, logOut }}>
         <nav className="navbar">
            <h5>Navbar</h5>
            <Navlink />
         </nav>
      </NavContext.Provider>
   )
}
export default Navbar