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
    bill: [],
    favourite: [],
  },
  reducers: {
    favourite: (state, action) => {
      if (action.payload.type === "add") {
        state.favourite.push({
          title: action.payload.title,
          closeShop: action.payload.closeShop,
          isFav: true,
        });
      } else if (action.payload.type === "remove") {
        state.favourite = state.favourite.filter((ele, ind) => {
          return ele.title !== action.payload.title;
        });
      }
    },
    updateStore: (state, action) => {
      state.store = action.payload.data;
    },
    updateCartData: (state, action) => {
      state.cartData.push(action.payload.data);
    },
    deleteCartData: (state, action) => {
      state.cartData.splice(action.payload.data, 1);
    },
    updateBill: (state, action) => {
      for (let item of action.payload.data) {
        state.bill.push({
          name: item.name,
          quantity: item.fat,
          price: item.calories,
        });
      }
    },
    billQuantity: (state, action) => {
      if (action.payload.type === "inc") {
        for (let item in state.bill) {
          if (state.bill[item].name === action.payload.data) {
            state.bill[item].quantity += 1;
          }
        }
      } else if (action.payload.type === "dec") {
        for (let item in state.bill) {
          if (state.bill[item].name === action.payload.data) {
            state.bill[item].quantity -= 1;
          }
        }
      }
    },
  },
});

export const { updateCart, updateNotification } = update.actions;
export const {
  favourite,
  updateStore,
  updateCartData,
  deleteCartData,
  updateBill,
  billQuantity,
} = serverData.actions;
