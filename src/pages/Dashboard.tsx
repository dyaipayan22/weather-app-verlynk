import { useEffect, useState } from 'react';
import CurrentWeatherCard from '../components/cards/current-weather-card';
import { getCurrentWeather } from '../utils/getCurrentWeather';
import { Weather } from '../types/weather';

const Dashboard = () => {
  const [cities, setCities] = useState<string[]>([]);
  const [weather, setweather] = useState<Weather[]>([]);

  useEffect(() => {
    const listOfCities = localStorage.getItem('cities');
    setCities(JSON.parse(listOfCities));
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = [];
      for (const city of cities) {
        const cityWeather = await getCurrentWeather(city);
        weatherData.push(cityWeather);
      }
      setweather(weatherData);
    };
    fetchWeather();
  }, [cities]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-4">
      {weather.map((cityWeather, index) => (
        <CurrentWeatherCard weather={cityWeather} key={index} />
      ))}
    </div>
  );
};

export default Dashboard;
