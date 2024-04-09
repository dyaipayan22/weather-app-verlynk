import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from './ui/button';
import Input from './ui/input';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { setCurrentCity } from '../features/weatherSlice';
import Container from './container';

const InputCitySchema = z.object({
  city: z.string().min(1, 'Enter a city'),
});

type InputCitySchemaType = z.infer<typeof InputCitySchema>;

const Search = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputCitySchemaType>({ resolver: zodResolver(InputCitySchema) });

  const onSubmit: SubmitHandler<InputCitySchemaType> = async (data) => {
    dispatch(setCurrentCity(data.city));
  };

  return (
    <Container>
      <div className="flex items-center justify-center gap-4 w-full relative">
        <Input
          id="city"
          register={register('city')}
          placeholder="Search for a city"
          type="text"
        />
        <Button label="Search" onClick={handleSubmit(onSubmit)} />
        {errors && (
          <span className="absolute left-5 top-11 text-sm font-medium text-red-500">
            {errors.city?.message}
          </span>
        )}
      </div>
    </Container>
  );
};

export default Search;
