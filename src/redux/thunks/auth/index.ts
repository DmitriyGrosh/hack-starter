import { createAsyncThunk } from '@reduxjs/toolkit';

import { login } from '../../../shared/api/auth';

export const loginThunk = createAsyncThunk('auth/loginThunk', async () => {
  const data = await login();
  localStorage.setItem('token', 'data');

  return data;
});
