import WeatherIcon from './WeatherIcon';
import { MapPin, Wind, Droplets, Eye, Thermometer, Clock } from 'lucide-react';

const WeatherCard = ({ weather, forecast, lastUpdated }) => {
  if (!weather) return null;

  return (
    <div className="space-y-6">
      <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-white/80" />
              <h2 className="text-2xl font-bold text-white">{weather.name}</h2>
              <span className="text-lg text-white/80">{weather.country}</span>
            </div>
            <p className="text-white/70 capitalize text-lg">{weather.description}</p>
          </div>
          <WeatherIcon icon={weather.icon} size="w-20 h-20" />
        </div>

        <div className="flex items-end gap-2 mb-6">
          <span className="text-6xl font-light text-white">{Math.round(weather.temp)}</span>
          <span className="text-2xl text-white/80 mb-2">°C</span>
          <span className="text-white/60 mb-3 ml-4">Feels like {Math.round(weather.feels_like)}°C</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <Wind className="w-6 h-6 text-white/80 mx-auto mb-2" />
            <p className="text-white/60 text-sm">Wind</p>
            <p className="text-white font-semibold">{weather.wind_speed} km/h</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <Droplets className="w-6 h-6 text-white/80 mx-auto mb-2" />
            <p className="text-white/60 text-sm">Humidity</p>
            <p className="text-white font-semibold">{weather.humidity}%</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <Eye className="w-6 h-6 text-white/80 mx-auto mb-2" />
            <p className="text-white/60 text-sm">Visibility</p>
            <p className="text-white font-semibold">{weather.visibility} km</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <Thermometer className="w-6 h-6 text-white/80 mx-auto mb-2" />
            <p className="text-white/60 text-sm">Pressure</p>
            <p className="text-white font-semibold">1013 hPa</p>
          </div>
        </div>
        {lastUpdated && (
          <div className="flex items-center justify-center mt-6 text-white/50">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">Last updated: {lastUpdated}</span>
          </div>
        )}
      </div>

      {forecast?.length > 0 && (
      <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-4">3-Day Forecast</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {forecast.map((day, idx) => (
      <div key={idx} className="bg-white/10 rounded-xl p-4 text-center">
      <p className="text-white/80 font-medium mb-2">{day.day}</p>
      <div className="flex justify-center mb-2">
      <WeatherIcon icon={day.icon} size="w-8 h-8" />
      </div>
      <p className="text-white text-lg font-semibold">{day.temp}°C</p>
      <p className="text-white/60 text-sm">{day.desc}</p>
      </div>
      ))}
      </div>
      </div>
      )}
    </div>
  );
};

export default WeatherCard;
