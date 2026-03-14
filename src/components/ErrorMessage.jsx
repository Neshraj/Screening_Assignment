export default function ErrorMessage({ message }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-32 gap-4 text-center"
      role="alert"
      aria-live="assertive"
    >
      <div className="text-5xl">⚠️</div>
      <div>
        <h2 className="font-display text-xl text-gray-800 mb-1">
          Could not load photos
        </h2>
        <p className="text-sm text-gray-500 font-body max-w-sm">
          {message}
        </p>
      </div>
      <p className="text-xs text-gray-400">
        Check your internet connection and reload the page.
      </p>
    </div>
  );
}