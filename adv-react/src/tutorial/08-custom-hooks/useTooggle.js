import { useState } from 'react';

function useTooggle(defaultValue) {
   const [show, setShow] = useState(defaultValue);

   const toggle = () => {
      setShow(!show);
   };

   return { show, toggle };
}
export default useTooggle