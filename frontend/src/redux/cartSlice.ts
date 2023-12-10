import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  // Add other properties as needed
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.items.push(action.payload);
      } else {
        state.items[itemIndex].quantity += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    subtractFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity -= 1;
        if (state.items[itemIndex].quantity === 0) {
          state.items.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, subtractFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
