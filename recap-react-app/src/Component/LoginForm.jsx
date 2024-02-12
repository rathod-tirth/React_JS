import { useState } from "react"

function LoginForm() {

   const [formValue, setFormValue] = useState({ username: "", password: "" })

   function handleChange(e) {
      setFormValue({ ...formValue, [e.target.name]: e.target.value })
   }

   function handleSubmit(e) {
      e.preventDefault()
      console.log(formValue);
   }

   return (
      <div>
         <form method="post" onSubmit={(e) => { handleSubmit(e) }}>
            <div>
               <label htmlFor="username">Username : </label>
               <input type="text" name="username" id="username" placeholder="Enter Username" value={formValue.username} onChange={handleChange} />
            </div>
            <div>
               <label htmlFor="password">Password : </label>
               <input type="password" name="password" id="password" placeholder="Enter Password" value={formValue.passoword} onChange={handleChange} />
            </div>
            <input type="submit" />
         </form>
      </div>
   )
}
export default LoginForm