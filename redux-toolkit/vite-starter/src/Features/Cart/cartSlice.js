import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState = {
   cartItems,
   amount: 2,
   total: 0,
   isLoading: true,
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
})

// console.log(cartSlice);
// console.log(cartSlice.getInitialState().isLoading);

export default cartSlice.reducer