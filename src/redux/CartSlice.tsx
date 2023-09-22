import { createSlice, PayloadAction } from "@reduxjs/toolkit"
interface cart { id: number; price: number; category: string; title: string; image: string; quantity: any }
interface CartItem {
    id: number;
    price: number;
    category: string;
    title: string;
    image: string;
    quantity: number;
  }
const cartSlice = createSlice({
    name: "cart",
    initialState: [] as CartItem[],
    reducers: {
        Add: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.find((item) => item.id === action.payload.id);
            
            if (!existingItem) {
              state.push({
                ...action.payload,
                quantity: 1,
              });
            } else {
              existingItem.quantity += 1;
            }

        },
        remove(state, action:PayloadAction<number>) {
            return state.filter((item: cart) => item.id !== action.payload)
        },

        removeOnePRoduct(state, action:PayloadAction<CartItem>){
            const existingItemIndex = state.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (existingItemIndex !== -1) {
              state[existingItemIndex].quantity -= 1;
            }

        }
    }
})

export const { Add, remove, removeOnePRoduct } = cartSlice.actions
export default cartSlice.reducer