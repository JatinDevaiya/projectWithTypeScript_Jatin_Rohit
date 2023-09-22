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
            
            const existingItemIndex = state.findIndex(
                (item) => {
                    return item.id === action.payload.id
                }
            );
            
            if (existingItemIndex  == -1) {
                state.push({
                    id: action.payload.id,
                    price: action.payload.price,
                    category: action.payload.category,
                    title: action.payload.title,
                    image: action.payload.image,
                    quantity: action.payload.quantity + 1
                    
                })
            } else {
                state[existingItemIndex].quantity = state[existingItemIndex].quantity + 1
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