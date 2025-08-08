import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import weatherService from './api/weather';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    handleSearch('New York');
  }, []);

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    try {
      const [weatherData, forecastData] = await Promise.all([
        weatherService.fetchWeather(city),
        weatherService.fetchForecast(city)
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch {
      setError('City not found. Please try another city.');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const getBackgroundClass = () => {
    if (!weather) return 'from-blue-600 via-blue-700 to-blue-800';
    const backgrounds = {
      '01d': 'from-yellow-400 via-orange-500 to-red-500',
      '01n': 'from-gray-800 via-gray-900 to-black',
      '02d': 'from-blue-400 via-blue-500 to-blue-600',
      '03d': 'from-gray-400 via-gray-500 to-gray-600',
      '10d': 'from-blue-600 via-blue-700 to-gray-700',
      '11d': 'from-purple-600 via-purple-700 to-gray-800',
      '13d': 'from-blue-200 via-blue-300 to-gray-400',
    };
    return backgrounds[weather.icon] || 'from-blue-600 via-blue-700 to-blue-800';
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getBackgroundClass()} transition-all duration-1000`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sun className="w-8 h-8 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Weather App</h1>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-200"
            >
              {isDarkMode ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-white" />}
            </button>
          </div>
          <p className="text-white/80 text-lg">Get real-time weather information for any city</p>
        </div>

        <SearchBar onSearch={handleSearch} loading={loading} />

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} onRetry={() => handleSearch('New York')} />}
        {weather && !loading && !error && (
          <WeatherCard weather={weather} forecast={forecast} lastUpdated={lastUpdated} />
        )}

        <div className="text-center mt-12 text-white/60">
          <p className="text-sm">Built with React • OpenWeatherMap API • Powered by Vite</p>
        </div>
      </div>
    </div>
  );
};

export default App;
