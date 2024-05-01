import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const url = 'https://www.course-api.com/react-useReducer-cart-project'

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
   return fetch(url)
      .then(resp => resp.json())
      .catch(err => console.log(err))
})

const initialState = {
   cartItems: [],
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
         state.amount = 0
      },
      removeCart: (state, { payload }) => {
         state.cartItems = state.cartItems.filter((item) => item.id !== payload)
      },
      increase: (state, { payload }) => {
         const cartItems = state.cartItems.find((item) => item.id === payload.id)
         cartItems.amount += 1
      },
      decrease: (state, { payload }) => {
         const cartItems = state.cartItems.find((item) => item.id === payload.id)
         cartItems.amount -= 1
      },
      calculateTotal: (state) => {
         let total = 0
         let amount = 0
         state.cartItems.forEach((item) => {
            amount += item.amount
            total += item.amount * item.price
         })
         state.amount = amount
         state.total = total
      }
   },
   extraReducers: {
      [getCartItems.pending]: (state) => {
         state.isLoading = true
      },
      [getCartItems.fulfilled]: (state, actions) => {
         state.cartItems = actions.payload
         state.isLoading = false
      },
      [getCartItems.rejected]: (state) => {
         state.isLoading = false
      }
   }
})

// console.log(cartSlice);
// console.log(cartSlice.getInitialState().isLoading);

export const { clearCart, removeCart, increase, decrease, calculateTotal } = cartSlice.actions
export default cartSlice.reducer