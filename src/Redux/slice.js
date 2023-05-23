import { createSlice } from "@reduxjs/toolkit";

export const update = createSlice({
  name: "update",
  initialState: {
    cart: 0,
    notification: 0,
  },
  reducers: {
    updateCart: (state, action) => {
      state.cart = action.payload.data;
    },
    updateNotification: (state) => {
      state.notification += 1;
    },
  },
});

export const serverData = createSlice({
  name: "stores",
  initialState: {
    store: [1, 2, 3, 4, 5, 6, 7],
    cartData: [],
  },
  reducers: {
    updateStore: (state, action) => {
      state.store = action.payload.data;
    },
    updateCartData: (state, action) => {
      state.cartData.push(action.payload.data);
    },
    deleteCartData: (state, action) => {
      state.cartData.splice(action.payload.data, 1);
    },
  },
});

export const { updateCart, updateNotification } = update.actions;
export const { updateStore, updateCartData, deleteCartData } =
  serverData.actions;
