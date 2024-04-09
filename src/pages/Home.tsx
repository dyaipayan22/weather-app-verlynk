import CurrentWeatherCard from '../components/cards/current-weather-card';
import { useAppSelector } from '../hooks/useAppSelector';
import Search from '../components/search';

const Home = () => {
  const { city } = useAppSelector((state) => state.weather);

  return (
    <div className="w-full flex flex-col gap-8">
      <Search />
      {city && <CurrentWeatherCard currentCity={city} />}
    </div>
  );
};

export default Home;
