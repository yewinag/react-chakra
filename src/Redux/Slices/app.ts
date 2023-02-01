import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

export interface IAppSlice {
  version: number;
}

const initialState: IAppSlice = {
  version: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    reset: (state) => {
      state.version = 0;
    },
  },
});

export const { reset } = appSlice.actions;
export const selectApp = (state: RootState) => state.app; // select app state
export default appSlice.reducer;
