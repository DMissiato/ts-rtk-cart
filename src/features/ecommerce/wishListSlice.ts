
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Wish, WishListState } from '../../types/ecommerce';

const initialState: WishListState = {
  wishes: []
};

export const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Wish>) => 
    { 
      state.wishes.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => 
    {
      state.wishes = state.wishes.filter((wish) => wish.uuid !== action.payload);
    }
  }
});

export const { add, remove } = wishListSlice.actions;


export const selectAllWishes = (state: RootState) => state.wishlist.wishes;


export default wishListSlice.reducer;
