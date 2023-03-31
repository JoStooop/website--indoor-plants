import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loading: "idle",
  data: [],
  error: null,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    emptyBin: () => initialState,
    openBasket: (state, action) => {
      state.isBasketOpen = action.payload;
    },
    addToBasket: (state, action) => {
      const flower = action.payload;
      const existingProduct = state.data.find((el) => el.id === flower.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.data.push({...flower, quantity: 1});
      }
    },
    addQuantity: (state, action) => {
      const flower = action.payload;
      const existingProduct = state.data.find((el) => el.id === flower.id);

      existingProduct.quantity += 1;
    },
    removeQuantity: (state, action) => {
      const flower = action.payload;
      const existingProduct = state.data.find((el) => el.id === flower.id);

      if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        state.data = state.data.filter((item) => item.id !== flower.id);
      }
    },
  },
})
;

export const {
  emptyBin,
  addToBasket,
  addQuantity,
  removeQuantity,
} = basketSlice.actions;

export default basketSlice.reducer;
