const ErrorMessage = ({ message, onRetry }) => (
  <div className="bg-red-500/20 backdrop-blur-lg rounded-2xl p-6 border border-red-500/30 text-center">
    <p className="text-white mb-4">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="bg-red-500/30 hover:bg-red-500/50 px-4 py-2 rounded-lg text-white transition-colors duration-200"
      >
        Try Again
      </button>
    )}
  </div>
);

export default ErrorMessage;
