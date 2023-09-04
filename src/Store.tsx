import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./redux/CounterSlice";
import { usersApi } from "./services/Users";
import cartReducer from "./redux/CartSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    cart: cartReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (aaa) => aaa().concat(usersApi.middleware),
});
