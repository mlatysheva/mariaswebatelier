import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollPositionSchema } from '../types/ScrollPositionSchema';

const initialState: ScrollPositionSchema = {
  scroll: {},
};

export const scrollPositionSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScroll: (state, action: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const { actions: scrollPostionActions } = scrollPositionSlice;
export const { reducer: scrollPositionReducer } = scrollPositionSlice;
