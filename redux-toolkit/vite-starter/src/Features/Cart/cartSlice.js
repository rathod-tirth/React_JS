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
   reducers: {
      clearCart: (state) => {
         state.cartItems = []
      },
      removeCart: (state, { payload }) => {
         state.cartItems = state.cartItems.filter((item) => item.id !== payload)
      },
      increase: (state, { payload }) => {
         const cartItems = state.cartItems.find((item) => item.id === payload)
         cartItems.amount += 1
      },
      decrease: (state, { payload }) => {
         const cartItems = state.cartItems.find((item) => item.id === payload)
         if (cartItems.amount > 0) {
            cartItems.amount -= 1
         }
      },
      total: (state) => {
         // const cartItems = state.cartItems.find((item) => item.id === payload)
         // let total = cartItems.amount * cartItems.price
         // state.total += total
         let total = 0
         // state.cartItems.
      }
   }
})

// console.log(cartSlice);
// console.log(cartSlice.getInitialState().isLoading);

export const { clearCart, removeCart, increase, decrease } = cartSlice.actions
export default cartSlice.reducer