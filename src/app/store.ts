import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../features/ecommerce/cartSlice';
import wishListReducer from '../features/ecommerce/wishListSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishListReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
