import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Weather } from '../types/weather';
import axios from 'axios';

interface WeatherState {
  loading: boolean;
  weather: Weather | null;
  error: string | null;
}

const initialState: WeatherState = {
  loading: false,
  weather: null,
  error: null,
};

export const fetchCurrentWeather = createAsyncThunk(
  'fetch/weather',
  async (city: string, { rejectWithValue }) => {
    console.log(import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
          import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
        }`
      );
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentWeather.pending, (state) => {
        state.weather = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCurrentWeather.fulfilled,
        (state, action: PayloadAction<Weather>) => {
          state.loading = false;
          state.weather = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchCurrentWeather.rejected, (state, action) => {
        state.weather = null;
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default weatherSlice.reducer;
