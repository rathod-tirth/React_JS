import { useEffect, useState } from "react"

const url = "https://jsonplaceholder.typicode.com/users"

function UserList() {

   const [data, setData] = useState([])

   useEffect(() => {
      fetchData();
   }, [])

   const fetchData = async () => {
      try {
         const response = await fetch(url);
         const users = await response.json();
         setData(users);
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <div>
         {data.map((v) => {
            const { id, name, username, email, phone, website } = v

            return (
               <div key={id}>
                  <p>Name : {name}</p>
                  <p>Username : {username}</p>
                  <p>Email : {email}</p>
                  <p>Phone : {phone}</p>
                  <p>Website : {website}</p>
                  <hr />
               </div>
            )
         })}
      </div>
   )
}
export default UserList