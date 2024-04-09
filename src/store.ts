import { configureStore } from '@reduxjs/toolkit';
import { weatherSlice } from './features/weatherSlice';
import { dashboardSlice } from './features/dashboardSlice';

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    dashboard: dashboardSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
