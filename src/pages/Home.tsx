import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Weather } from '../types/weather';
import { getCurrentWeather } from '../utils/getCurrentWeather';
import Input from '../components/ui/input';
import Button from '../components/ui/button';
import CurrentWeatherCard from '../components/cards/current-weather-card';
import Container from '../components/container';
import Error from '../components/error';
import Loading from '../components/loading';

const InputCitySchema = z.object({
  city: z.string().min(1, 'Enter a city'),
});

type InputCitySchemaType = z.infer<typeof InputCitySchema>;

const Home = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputCitySchemaType>({ resolver: zodResolver(InputCitySchema) });

  const onSubmit: SubmitHandler<InputCitySchemaType> = async (input) => {
    setLoading(true);
    setWeather(null);
    setError(null);
    try {
      const data = await getCurrentWeather(input.city);
      setError(null);
      setWeather(data);
    } catch (error: any) {
      setWeather(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
        {weather && <CurrentWeatherCard weather={weather} />}
        {error && <Error message={error} />}
        {loading && <Loading />}
      </div>
    </Container>
  );
};

export default Home;
