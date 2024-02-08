import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;

//whole big reducer is app reducer and inside it is contains small reducer we will just add small reducers. 