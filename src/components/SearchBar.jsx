export default function SearchBar({ value, onChange, placeholder = 'Search by author name...' }) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
        />
      </svg>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label="Search photos by author name"
        className="w-full pl-11 pr-10 py-3 rounded-2xl border border-gray-200
                   bg-white text-sm font-body text-gray-800 shadow-sm
                   placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-brand-rose focus:border-transparent
                   transition-all duration-200"
      />
      {value && (
        <button
          onClick={() => onChange({ target: { value: '' } })}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2
                     w-6 h-6 flex items-center justify-center
                     rounded-full bg-gray-100 hover:bg-gray-200
                     text-gray-500 text-xs font-bold transition-colors"
        >
          ✕
        </button>
      )}

    </div>
  );
}