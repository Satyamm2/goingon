// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     items: [],
// };

// const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         setAddToCart: (state, action) => {
//             state.items = action.payload;
//             // state.items.push(action.payload);
//         },
//     },
// });

// export const { setAddToCart } = cartSlice.actions;
// export const selectCartItems = (state) => state.cart.items;
// export default cartSlice.reducer;


// cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.items.push(action.payload);
//     },
//   },
// });

// export const { addToCart } = cartSlice.actions;

// export const selectCartItems = (state) => state.cart.items;

// export default cartSlice.reducer;





// src/redux/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const { id, name, price } = action.payload;
//       const existingProduct = state.items.find((item) => item.id === id);

//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       } else {
//         state.items.push({ id, name, price, quantity: 1 });
//       }
//     },
//   },
// });

// export const { addToCart } = cartSlice.actions;
// export const selectCartItems = (state) => state.cart.items;

// export default cartSlice.reducer;

// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadCartItems = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = {
  items: loadCartItems(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price } = action.payload;
      const existingProduct = state.items.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ id, name, price, quantity: 1 });
      }

      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state, action) =>{
      state.items = [];
      localStorage.removeItem('cart');
    }
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
