
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Activity
{
  uuid: string,
  title: string,
  cover_image_url: string,
  retail_price: any,
  quantity: number
}

interface CartState 
{
  activities: Activity[]
}

const initialState: CartState = {
  activities: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Activity>) => 
    {
      if(!action.payload.quantity) 
      {
        action.payload = { ...action.payload, quantity: 1 };
      }

      state.activities.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => 
    {
      state.activities = state.activities.filter((activity) => activity.uuid !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<string>) => 
    {
      const index: number = state.activities.findIndex((activity) => activity.uuid === action.payload);
      state.activities[index].quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => 
    {
      const index: number = state.activities.findIndex((activity) => activity.uuid === action.payload);
      if(state.activities[index].quantity > 1) 
      {
        state.activities[index].quantity -= 1;
      }
      else
      {
        state.activities = state.activities.filter((activity) => activity.uuid !== action.payload);
      }
    }
  }
});

export const { add, remove, increaseQuantity, decreaseQuantity } = cartSlice.actions;


export const selectAllActivities = (state: RootState) => state.cart.activities;


export default cartSlice.reducer;
