import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import swal from "sweetalert";

export interface Product {
  _id: string;
  image: string;
  title: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  description: string;
}

// Cart item interface
export interface CartItem extends Product {
  cartQuantity: number;
}

// Initial state interface
export interface CartState {
  items: CartItem[];
  totalOrderPrice: number;
}

const initialState: CartState = {
  items: [],
  totalOrderPrice: 0,
};

// Utility function to show sweet alert
const showAlert = (message: string) => {
  //   swal.fire({
  //     icon: 'error',
  //     title: '',
  //     text: message,
  //   });
  swal({
    title: message,
    text: "Out of Stock!",
    icon: "error",
  });
};

// Cart slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      console.log(action.payload);
      const product = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);

      console.log(existingItem);

      if (existingItem) {
        console.log("exist");
        if (existingItem.quantity > 0) {
          existingItem.quantity = existingItem.quantity - 1;
          existingItem.cartQuantity += 1;
          state.totalOrderPrice += product.price;
        } else {
          console.log("exist");
          return showAlert("Product is out of stock!");
        }
      } else {
        console.log("new");

        if (product.quantity > 0) {
          product.quantity = product.quantity - 1;
          state.items.push({ ...product, cartQuantity: 1 });
          state.totalOrderPrice += product.price;
        } else {
          showAlert("Product is out of stock!");
        }
      }
    },

    // addToCart: (state, action: PayloadAction<Product>) => {
    //   const product = action.payload;
    //   const existingProduct = state.items.find(
    //     (item) => item._id === product._id
    //   );

    //   if (existingProduct) {
    //     if (existingProduct.quantity > 0) {
    //       existingProduct.cartQuantity += 1;
    //       existingProduct.quantity -= 1;
    //     } else {
    //       swal({
    //         title: "This product is out of stock.",
    //         text: "Out of Stock!",
    //         icon: "error",
    //       });
    //     }
    //   } else {
    //     if (product.quantity > 0) {
    //       state.items.push({ ...product, cartQuantity: 1 });
    //       product.quantity -= 1;
    //     } else {
    //       swal({
    //         title: "This product is out of stock.",
    //         text: "Out of Stock!",
    //         icon: "error",
    //       });
    //     }
    //   }

    //   state.totalOrderPrice = state.items.reduce(
    //     (total, item) => total + item.price * item.cartQuantity,
    //     0
    //   );
    // },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      if (existingItem) {
        state.totalOrderPrice -= existingItem.price * existingItem.cartQuantity;
        existingItem.quantity += existingItem.cartQuantity;
        state.items = state.items.filter((item) => item._id !== productId);
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      if (existingItem) {
        if (existingItem.quantity > 0) {
          existingItem.cartQuantity += 1;
          existingItem.quantity -= 1;
          state.totalOrderPrice += existingItem.price;
        } else {
          showAlert("Product is out of stock!");
        }
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      if (existingItem) {
        if (existingItem.cartQuantity > 1) {
          existingItem.cartQuantity -= 1;
          existingItem.quantity += 1;
          state.totalOrderPrice -= existingItem.price;
        } else {
          state.totalOrderPrice -= existingItem.price;
          existingItem.quantity += 1;
          state.items = state.items.filter((item) => item._id !== productId);
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
