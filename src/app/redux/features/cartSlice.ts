import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../../../interface";

type CartState = {
    CartBookingItems: CartItem[]
}

const initialState: CartState = { CartBookingItems: [] }

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.CartBookingItems.push(action.payload)
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.CartBookingItems = state.CartBookingItems.filter((item) => item.hid !== action.payload)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer