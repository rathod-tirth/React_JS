import { Link, NavLink } from "react-router-dom"

function Navbar() {
   return (
      <>
         <nav className="navbar" >
            <NavLink to="" style={({ isActive }) => { return ({ color: isActive ? 'red' : 'gray' }) }} >Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => { return isActive ? 'active' : 'link' }} >About</NavLink>
            <NavLink to="/products" className="link" >Products</NavLink>
            <NavLink to="/login" className="link" >Login</NavLink>
         </nav>
      </>
   )
}
export default Navbar


/**
 * 1. isActive: you can use this boolean in style and classname attribute

   style={({isActive})=>{
      return ({color : isActive ? 'blue' : 'gray'})
   }}

   classname={({isActive})=>{
      return isActive ? 'class active' : 'class'
   }}

 * 2. Add a class name "active" in your css file and add the css there
   whenever the link is active the Navlink automatically gives "active" class to the active link
 */