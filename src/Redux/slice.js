import { createSlice } from "@reduxjs/toolkit";

export const update = createSlice({
  name: "update",
  initialState: {
    cart: 0,
    notification: 0,
  },
  reducers: {
    updateCart: (state, action) => {
      if (action.type === "increase") {
        state.cart += 1;
      }
      if (action.type === "decrease") {
        state.cart -= 1;
      }
    },
    updateNotification: (state) => {
      state.notification += 1;
    },
  },
});

export const serverData = createSlice({
  name: "stores",
  initialState: {
    store: [1,2,3,4,5,6,7],
  },
  reducers: {
    updateStore: (state, action) => {
      state.store = action.payload.data;
    },
  },
});

export const { updateCart, updateNotification } = update.actions;
export const { updateStore } = serverData.actions;
