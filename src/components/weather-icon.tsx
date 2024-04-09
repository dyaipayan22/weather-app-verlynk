import { updateWeatherIcon } from '../utils/updateWeatherIcon';

const WeatherIcon = ({ type }: { type: string }) => updateWeatherIcon(type);

export default WeatherIcon;
