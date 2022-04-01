import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginThunk } from '../../thunks/auth';

interface IAuth {
  refreshToken: string;
  accessToken: string;
  email: string;
  isLoading: boolean;
}

const initialState: IAuth = {
  refreshToken: '',
  accessToken: '',
  email: '',
  isLoading: false,
};

export const authSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRefreshToken: (state) => {
      state.email = 'data';
      state.refreshToken = 'data';
      state.accessToken = 'data';
    },
  },
  extraReducers: {
    [loginThunk.pending.type]: (state, action: PayloadAction<any>) => {
      console.log('==========>action', action);
      state.isLoading = true;
    },
    [loginThunk.fulfilled.type]: (state, action: PayloadAction<any>) => {
      console.log('==========>action', action);
      state.isLoading = false;
      state.email = 'data';
      state.refreshToken = 'data';
      state.accessToken = 'data';
    },
    [loginThunk.rejected.type]: (state, action: PayloadAction<any>) => {
      console.log('==========>access§', action);
      state.isLoading = false;
    },
  },
});

export const { setRefreshToken } = authSlicer.actions;

export default authSlicer.reducer;
