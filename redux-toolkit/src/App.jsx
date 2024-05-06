import { useEffect } from "react";
import CartContainer from "./Components/CartContainer";
import Navbar from "./Components/Navbar";
import { calculateTotal, getCartItems } from "./Features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Components/Modal";

function App() {
  // useSelector to access the store data
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  // useDispactch to invoke the reducers functions
  const dispatch = useDispatch()

  // fetching cartItems array on initial mount of the site
  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  // calculating total on change of cartItems state
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  // conditional rendering
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {/* conditionally rendering modal */}
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;

// We use useDispatch in redux the same way we do in useReducer to dispatch the actions
