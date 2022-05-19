
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Wish
{
  uuid: string,
  title: string
}

interface WishListState 
{
  wishes: Wish[]
}

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
