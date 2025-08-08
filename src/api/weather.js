const weatherService = {
  async fetchWeather(city) {
    if (!city) return null; // ensures the parameter is "used"

    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      name: city,
      country: 'US',
      temp: Math.floor(Math.random() * 30) + 5,
      feels_like: Math.floor(Math.random() * 30) + 5,
      humidity: Math.floor(Math.random() * 50) + 30,
      wind_speed: Math.floor(Math.random() * 10) + 2,
      visibility: Math.floor(Math.random() * 5) + 5,
      description: ['Clear Sky', 'Partly Cloudy', 'Cloudy', 'Light Rain', 'Heavy Rain'][Math.floor(Math.random() * 5)],
      icon: ['01d', '02d', '03d', '10d', '11d'][Math.floor(Math.random() * 5)],
    };
  },

  async fetchForecast(city) {
    if (!city) return [];

    await new Promise(resolve => setTimeout(resolve, 800));

    return [
      { day: 'Tomorrow', temp: 22, icon: '02d', desc: 'Partly Cloudy' },
      { day: 'Day 2', temp: 18, icon: '10d', desc: 'Light Rain' },
      { day: 'Day 3', temp: 25, icon: '01d', desc: 'Sunny' },
    ];
  },
};

export default weatherService;
