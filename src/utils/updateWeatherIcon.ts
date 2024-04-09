import React from 'react';
import { IconType } from 'react-icons';
import {
  BsFillCloudRainFill,
  BsFillSunFill,
  BsCloudyFill,
  BsCloudFog2Fill,
} from 'react-icons/bs';
import { TiWeatherPartlySunny } from 'react-icons/ti';

export const updateWeatherIcon = (type: string): React.ReactNode => {
  switch (type) {
    case 'Rain':
      return <BsFillCloudRainFill />;

    case 'Clear':
      return <BsFillSunFill />;

    case 'Clouds':
      return <BsCloudyFill />;

    case 'Mist':
      return <BsCloudFog2Fill />;

    default:
      return <TiWeatherPartlySunny />;
  }
};

// import { IconType } from 'react-icons';
// import {
//   BsFillCloudRainFill,
//   BsFillSunFill,
//   BsCloudyFill,
//   BsCloudFog2Fill,
// } from 'react-icons/bs';
// import { TiWeatherPartlySunny } from 'react-icons/ti';

// export const updateWeatherIcon = (type: string) => {

//   switch (type) {
//     case 'Rain':
//       return  <BsFillCloudRainFill />;
//       break;

//     case 'Clear':
//       iconElement = BsFillSunFill;
//       iconColor = '#FFC436';
//       break;
//     case 'Clouds':
//       iconElement = BsCloudyFill;
//       iconColor = '#102C57';
//       break;

//     case 'Mist':
//       iconElement = BsCloudFog2Fill;
//       iconColor = '#279EFF';
//       break;
//     default:
//       iconElement = TiWeatherPartlySunny;
//       iconColor = '#7B2869';
//   }
// };
