import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardState {
  cities: string[];
}

const initialState: DashboardState = {
  cities: [],
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<string>) => {
      state.cities.push(action.payload);
    },
  },
});

export const { addCity } = dashboardSlice.actions;
export default dashboardSlice.reducer;
