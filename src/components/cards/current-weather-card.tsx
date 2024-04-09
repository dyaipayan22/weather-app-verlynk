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
import { useLocation } from 'react-router-dom';
import {
  BsCloudFog2Fill,
  BsCloudyFill,
  BsFillCloudRainFill,
  BsFillSunFill,
} from 'react-icons/bs';
import { TiWeatherPartlySunny } from 'react-icons/ti';

interface CurrentWeatherCardProps {
  weather: Weather;
}

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({ weather }) => {
  const location = useLocation();
  const url = location.pathname;

  const addToFavourites = (city: string) => {
    const listOfCities = localStorage.getItem('cities');
    if (listOfCities === null) {
      const arrCities = [city];
      localStorage.setItem('cities', JSON.stringify(arrCities));
    } else {
      const arrCities = JSON.parse(listOfCities).concat(city);
      localStorage.setItem('cities', JSON.stringify(arrCities));
    }
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
            url === '/dashboard' &&
            'border-2 border-gray-500 p-4 rounded-lg shadow-lg'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaLocationDot className="h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-semibold">
                {weather.name}
              </h1>
              <h1 className="text-lg md:text-xl font-semibold tracking-wider text-[#000000cc] ml-1">
                {weather.sys.country}
              </h1>
            </div>
            <CiCirclePlus
              className={`h-8 w-8 cursor-pointer ${
                url === '/dashboard' && 'hidden'
              }`}
              onClick={() => addToFavourites(weather.name)}
            />
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="text-9xl">
              {iconChanger(weather.weather[0].main)}
            </div>
            <h1 className="text-4xl md:text-5xl font-medium">
              {weather.main.temp}&deg; C
            </h1>
            <span className="text-2xl font-semibold">
              {weather?.weather[0].main}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Parameter
              label="Humidity"
              value={weather.main.humidity}
              unit="%"
              icon={FaDroplet}
            />
            <Parameter
              label="Wind Speed"
              value={weather.wind.speed}
              unit="km/h"
              icon={FaWind}
            />
            <Parameter
              label="Min Temperature"
              value={weather.main.temp_min}
              unit="&deg; C"
              icon={FaTemperatureArrowDown}
            />
            <Parameter
              label="Max Temperature"
              value={weather.main.temp_max}
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
