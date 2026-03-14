export default function EmptyState({ query }) {
  return (
    <div className="flex flex-col items-center justify-center py-32 gap-4 text-center">
      <div className="text-5xl">🔍</div>
      <div>
        <h2 className="font-display text-xl text-gray-800 mb-1">
          No results found
        </h2>
        <p className="text-sm text-gray-500 font-body">
          No photos match{' '}
          <span className="font-semibold text-gray-700">
            "{query}"
          </span>
        </p>
      </div>
      <p className="text-xs text-gray-400">
        Try a different author name.
      </p>
    </div>
  );
}