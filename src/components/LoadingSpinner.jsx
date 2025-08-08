const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-white mb-4"></div>
    <p className="text-white/80">Fetching weather data...</p>
  </div>
);

export default LoadingSpinner;
