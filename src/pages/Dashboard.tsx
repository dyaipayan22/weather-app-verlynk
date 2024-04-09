import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/button';
import { useAppSelector } from '../hooks/useAppSelector';
import DashboardCard from '../components/cards/dashboard-card';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { setCurrentCity } from '../features/weatherSlice';
import CurrentWeatherCard from '../components/cards/current-weather-card';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cities } = useAppSelector((state) => state.dashboard);
  const { city } = useAppSelector((state) => state.weather);

  const navigateToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    dispatch(setCurrentCity(null));
  }, [dispatch]);

  return (
    <>
      {cities.length > 0 ? (
        <div className="w-full flex flex-col-reverse lg:flex-row gap-4">
          <div className="w-full lg:w-1/4 flex flex-col gap-4">
            <h1 className="font-bold text-xl uppercase tracking-wide lg:text-center">
              Saved Cities
            </h1>
            <div className="border border-gray-500" />
            {cities.map((city, index) => (
              <DashboardCard currentCity={city} key={index} />
            ))}
          </div>
          {city ? (
            <CurrentWeatherCard currentCity={city} />
          ) : (
            <div className="grow flex items-center justify-center">
              <span className="hidden lg:block text-center text-xl font-semibold">
                Click on the icon to get the temperature
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="font-bold text-2xl">
            No cities in your dashboard
          </span>
          <Button label="Go back Home" onClick={navigateToHome} />
        </div>
      )}
    </>
  );
};

export default Dashboard;
