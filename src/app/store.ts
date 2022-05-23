import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { musementApi } from '../services/activities';
import cartReducer from '../features/ecommerce/cartSlice';
import wishListReducer from '../features/ecommerce/wishListSlice';

export const store = configureStore({
  reducer: {
    [musementApi.reducerPath]: musementApi.reducer,
    cart: cartReducer,
    wishlist: wishListReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(musementApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
