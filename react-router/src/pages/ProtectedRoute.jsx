import { Navigate } from "react-router-dom"

function ProtectedRoute({ user, children }) {

   if (user) {
      return children
   } else {
      return <Navigate to='/' />
   }
}
export default ProtectedRoute

// You can use useNavigate but it gets needlessly complex and since its a protected route
// the above approach provides more clear and concise code