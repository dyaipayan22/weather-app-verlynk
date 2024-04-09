import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import Input from '../components/ui/input';
import Button from '../components/ui/button';
import CurrentWeatherCard from '../components/cards/current-weather-card';
import Container from '../components/container';
import Error from '../components/error';
import Loading from '../components/loading';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchCurrentWeather } from '../features/weatherSlice';

const InputCitySchema = z.object({
  city: z.string().min(1, 'Enter a city'),
});

type InputCitySchemaType = z.infer<typeof InputCitySchema>;

const Home = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputCitySchemaType>({ resolver: zodResolver(InputCitySchema) });

  const { weather, loading, error } = useAppSelector((state) => state.weather);

  const onSubmit: SubmitHandler<InputCitySchemaType> = async (data) => {
    dispatch(fetchCurrentWeather(data.city));
  };

  return (
    <Container>
      <div className="w-full flex flex-col gap-8">
        <div className="flex items-center justify-center gap-4 w-full relative">
          <Input
            id="city"
            register={register('city')}
            placeholder="Search for a city"
            type="text"
            errors={errors}
          />
          <Button
            label="Search"
            onClick={handleSubmit(onSubmit)}
            disabled={loading}
          />
        </div>
        {weather && <CurrentWeatherCard currentWeather={weather} />}
        {error && <Error message={error} />}
        {loading && <Loading />}
      </div>
    </Container>
  );
};

export default Home;
