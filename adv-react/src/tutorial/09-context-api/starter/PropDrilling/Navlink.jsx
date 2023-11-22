import UserContainer from "./UserContainer"

function Navlink({ user, logOut }) {
   return (
      <div className="nav-container">
         <UserContainer user={user} logOut={logOut} />
      </div>
   )
}
export default Navlink