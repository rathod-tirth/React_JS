import { useEffect, useState } from 'react';

// multiple returns
const Basics = () => {
   const [isLoad, setisLoad] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setisLoad(false);
      }, 3000)
   }, []);

   if (isLoad) {
      return <h3>Loading...</h3>
   }
   return <h3>Hello There</h3>
};
export default Basics;

/**
 * you can have multiple retuns in react
 * here we use re-rendering functionality of useState to return a different element after setTimeout
 * naming convention for boolean value in state starts with "is"
 */
