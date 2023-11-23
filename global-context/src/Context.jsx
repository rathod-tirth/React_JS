import { createContext, useContext, useState } from "react";

const GlobalContex = createContext();

export const useGlobalContext = () => useContext(GlobalContex);

const AppContex = ({ children }) => {
   const [count, setCount] = useState(0);

   return (
      <GlobalContex.Provider value={{ count, setCount }}>
         {children}
      </GlobalContex.Provider>
   );
};

export default AppContex;