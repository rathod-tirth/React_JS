function UserContainer({ user, logOut }) {
   return (
      <div className="user-container">
         {user ? (
            <>
               <p>Hello There, {user.name.toUpperCase()}</p>
               <button className="btn" onClick={logOut}>Logout</button>
            </>
         ) : <p>Please Login</p>}
      </div>
   )
}
export default UserContainer