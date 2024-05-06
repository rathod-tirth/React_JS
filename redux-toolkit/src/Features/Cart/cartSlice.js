import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://www.course-api.com/react-useReducer-cart-project'

// thunk for async functions in redux
export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
   try {
      // get data
      const resp = await axios(url);
      return resp.data;
   } catch (err) {
      return console.log(err);
   }
})

// default state
const initialState = {
   cartItems: [],
   amount: 2,
   total: 0,
   isLoading: true,
}

// define reducer
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
   // handles the async thunk promise functionality
   extraReducers: (builder) => {
      builder
         .addCase(getCartItems.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getCartItems.fulfilled, (state, actions) => {
            state.cartItems = actions.payload
            state.isLoading = false
         })
         .addCase(getCartItems.rejected, (state) => {
            state.isLoading = false
         })
   }
})

// console.log(cartSlice);
// console.log(cartSlice.getInitialState().isLoading);

export const { clearCart, removeCart, increase, decrease, calculateTotal } = cartSlice.actions
export default cartSlice.reducer

/**
 * Redux-toolkit provides createSlice which intializes our reducer.

 * createSlice makes it easier to define the reducer and use redux, it skips the 
   defining of actions and no need to always return state as a default statement.

 * We can define a slice by providing a name, defaultState, and the reducers we want to add.

 * Name of your reducer will automatically will be the action name.
   
 * Within the reducer we can manipulate the state by passing the first parameter.
 * It also has the second parameter as action which can be used to pass additional argument on
   dispatching the reducer

 * Export slice.reducer in the store file and slice.actions where you want to dispatch the reducers

 * To handle async tasks redux provides createAsyncThunk which manages the state in async manner.
 * We need to provide prefix name of the function and our async function.

 * The thunk function always need to return a promise, so it could be handled by the extraReducers
   in createSlice.

 * Whatever returnes from the thunk function will be handled in the extraReducers where we can use 
   the pending, fullfilled and rejected options to control the async function and provide a 
   appropriate output for each stage and can update the state.
   
 * The latest redux toolkit uses builder functions to handle the promise stages which could be 
   used by using addcase in chain.
 */