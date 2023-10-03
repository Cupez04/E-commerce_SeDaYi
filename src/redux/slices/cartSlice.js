import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++
      if(!existingItem){
        state.cartItems.push({
            id: newItem.id,
            productName: newItem.productName,
            imgUrl: newItem.imgUrl,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
        })
      }
      else{
        existingItem.quantity++
        existingItem.totalPrice = Number(existingItem.totalPrice) + (newItem.price)
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      console.log(state.totalQuantity);
      console.log(state.cartItems);
      console.log(newItem)
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
    
      if (existingItem) {
        // Filtra los elementos que no coinciden con el ID
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
    
        // Actualiza totalQuantity y totalAmount solo si hay elementos en el carrito
        state.totalQuantity = state.cartItems.reduce(
          (total, item) => total + Number(item.quantity),
          0 // Valor inicial
        );
    
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0 // Valor inicial
        );
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
