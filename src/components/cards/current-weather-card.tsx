import { useLocation } from 'react-router-dom';
import { Weather } from '../../types/weather';
import { CiCirclePlus } from 'react-icons/ci';
import Parameter from './parameter-card';
import { FaWind } from 'react-icons/fa';
import {
  FaTemperatureArrowUp,
  FaTemperatureArrowDown,
  FaDroplet,
  FaLocationDot,
} from 'react-icons/fa6';
import {
  BsCloudFog2Fill,
  BsCloudyFill,
  BsFillCloudRainFill,
  BsFillSunFill,
} from 'react-icons/bs';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addCity } from '../../features/dashboardSlice';

interface CurrentWeatherCardProps {
  currentWeather: Weather;
}

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({
  currentWeather,
}) => {
  const { name, sys, weather, main, wind } = currentWeather;
  const location = useLocation();
  const dispatch = useAppDispatch();
  const path = location.pathname;

  const addToFavourites = (city: string) => {
    dispatch(addCity(city));
  };

  const iconChanger = (weather: string) => {
    let iconElement: React.ReactNode;

    switch (weather) {
      case 'Rain':
        iconElement = <BsFillCloudRainFill />;
        break;

      case 'Clear':
        iconElement = <BsFillSunFill />;

        break;
      case 'Clouds':
        iconElement = <BsCloudyFill />;

        break;

      case 'Mist':
        iconElement = <BsCloudFog2Fill />;

        break;
      default:
        iconElement = <TiWeatherPartlySunny />;
    }

    return iconElement;
  };

  return (
    <>
      {weather && (
        <div
          className={`flex flex-col gap-6 md:gap-8 ${
            path === '/dashboard' &&
            'border-2 border-gray-500 p-4 rounded-lg shadow-lg'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaLocationDot className="h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-semibold">{name}</h1>
              <h1 className="text-lg md:text-xl font-semibold tracking-wider text-[#000000cc] ml-1">
                {sys.country}
              </h1>
            </div>
            <CiCirclePlus
              className={`h-8 w-8 cursor-pointer ${
                path === '/dashboard' && 'hidden'
              }`}
              onClick={() => addToFavourites(name)}
            />
          </div>
          {weather && weather.length > 0 && (
            <div className="flex flex-col items-center gap-1.5">
              <div className="text-9xl">{iconChanger(weather[0].main)}</div>
              <h1 className="text-4xl md:text-5xl font-medium">
                {main.temp}&deg; C
              </h1>
              <span className="text-2xl font-semibold">{weather[0].main}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Parameter
              label="Humidity"
              value={main.humidity}
              unit="%"
              icon={FaDroplet}
            />
            <Parameter
              label="Wind Speed"
              value={wind.speed}
              unit="km/h"
              icon={FaWind}
            />
            <Parameter
              label="Min Temperature"
              value={main.temp_min}
              unit="&deg; C"
              icon={FaTemperatureArrowDown}
            />
            <Parameter
              label="Max Temperature"
              value={main.temp_max}
              unit="&deg; C"
              icon={FaTemperatureArrowUp}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentWeatherCard;
