import { Sun, Moon, Cloud, CloudRain, Snowflake, Zap } from 'lucide-react';

const WeatherIcon = ({ icon, size = 'w-12 h-12' }) => {
  const iconMap = {
    '01d': <Sun className={`${size} text-yellow-500`} />,
    '01n': <Moon className={`${size} text-gray-300`} />,
    '02d': <Cloud className={`${size} text-gray-400`} />,
    '03d': <Cloud className={`${size} text-gray-500`} />,
    '04d': <Cloud className={`${size} text-gray-600`} />,
    '10d': <CloudRain className={`${size} text-blue-500`} />,
    '11d': <Zap className={`${size} text-purple-500`} />,
    '13d': <Snowflake className={`${size} text-blue-200`} />
  };
  return iconMap[icon] || <Sun className={`${size} text-yellow-500`} />;
};

export default WeatherIcon;
