import { createContext, useContext, useState } from "react"
import Navlink from "./Navlink"

// creating a new context
export const NavContext = createContext();

// to use the context we use useContext
// here to reduce the code we create a function which calls the useContext
export const useNavContext = () => useContext(NavContext);

function Navbar() {
   const [user, setUser] = useState({ name: "Tirth" });

   const logOut = () => {
      setUser(null);
   }

   return (
      // giving range and value for out context
      <NavContext.Provider value={{ user, logOut }}>
         <nav className="navbar">
            <h5>Navbar</h5>
            <Navlink />
         </nav>
      </NavContext.Provider>
   )
}
export default Navbar

/**
 * The createContext declares our context, later we provide it with a range
 * and value to work with in the return section.
 * 
 * The context is created and defined in the parent class and every single child 
 * components can access the values.
 * 
 * This replaces prop drilling and makes passing values to child components easier.
 * 
 * To use the context we use useContext which fetches the values provided in the context.
 * 
 * We can also just declare our own function which instead calls the useContext and fetches the data
 * and then call that function to reduce the code, like done in above program. 
 */