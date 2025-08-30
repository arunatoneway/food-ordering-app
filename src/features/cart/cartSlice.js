import { createSlice } from '@reduxjs/toolkit'



export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: []
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        additem: (state, action) => {
            const item = action.payload;
            const existing = state.cart.find(i => i.id === item.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.cart.push({ ...cart, quantity: 1 });
            }
        },
        removeitem: (state, action) => {
            const id = action.payload; // id of the item
            const existing = state.items.find(i => i.id === id);
            if (existing) {
                if (existing.quantity > 1) {
                    existing.quantity -= 1;
                } else {
                    state.items = state.items.filter(i => i.id !== id);
                }
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, additem, removeitem } = cartSlice.actions

export default cartSlice.reducer