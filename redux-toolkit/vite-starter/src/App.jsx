import { useEffect } from "react";
import CartContainer from "./Components/CartContainer";
import Navbar from "./Components/Navbar";
import { calculateTotal } from "./Features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
