import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../Features/Modal/modalSlice';

const CartContainer = () => {
   // useSelector to access the store data
   const { cartItems, amount, total } = useSelector((store) => store.cart)
   // useDispactch to invoke the reducers functions
   const dispatch = useDispatch()

   // conditional rendering
   if (amount < 1) {
      return (
         <section className='cart'>
            {/* cart header */}
            <header>
               <h2>your bag</h2>
               <h4 className='empty-cart'>is currently empty</h4>
            </header>
         </section>
      );
   }
   return (
      <section className='cart'>
         {/* cart header */}
         <header>
            <h2>your bag</h2>
         </header>
         {/* cart items */}
         <div>
            {cartItems.map((item) => {
               return <CartItem key={item.id} {...item} />;
            })}
         </div>
         {/* cart footer */}
         <footer>
            <hr />
            <div className='cart-total'>
               <h4>
                  total <span>${total.toFixed(2)}</span>
               </h4>
            </div>
            <button className='btn clear-btn' onClick={() => dispatch(openModal())} >clear cart</button>
         </footer>
      </section>
   );
};

export default CartContainer;