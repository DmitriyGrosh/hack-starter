import { configureStore } from '@reduxjs/toolkit';

import authSlicer from './slices/auth';

export const store = configureStore({
  reducer: {
    auth: authSlicer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
