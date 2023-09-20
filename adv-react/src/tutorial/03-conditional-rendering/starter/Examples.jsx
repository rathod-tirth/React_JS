import { useState } from 'react';
import { exComponent } from './04-Short-circuit-examples';

export const Examples = () => {
   // falsy
   const [text, setText] = useState('');
   // truthy
   const [name, setName] = useState('Tirth');
   const [user, setUser] = useState({ name: 'john' });
   const [isEditing, setIsEditing] = useState(false);

   return (
      <>
         <h2>{text || "Hello There"}</h2>
         {name && (
            <div>
               <h2>Greetings</h2>
               <h2>{name}</h2>
            </div>
         )}
         {name && exComponent / }
      </>
   );
};
