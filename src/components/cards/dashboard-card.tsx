import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchCurrentWeather } from '../../features/weatherSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import CurrentWeatherCard from './current-weather-card';
import Error from '../error';
import Loading from '../loading';

interface DashboardCardProps {
  city: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ city }) => {
  const dispatch = useAppDispatch();

  const { weather, error } = useAppSelector((state) => state.weather);
  useEffect(() => {
    dispatch(fetchCurrentWeather(city));
  }, [dispatch, city]);

  return (
    <>
      {weather ? (
        <CurrentWeatherCard currentWeather={weather} />
      ) : error ? (
        <Error message={error} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DashboardCard;
