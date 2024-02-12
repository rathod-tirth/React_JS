import HelloComponent from "../Component/HelloComponent"
import LoginForm from "../Component/LoginForm"
import NameList from "../Component/NameList"
import UserList from "../Component/UserList"

function Home() {
   return (
      <div>
         <HelloComponent />
         <NameList />
         <LoginForm />
         <UserList />
      </div>
   )
}
export default Home