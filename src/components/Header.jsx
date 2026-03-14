import { LIMIT_OPTIONS } from '../constants/api';

export default function Header({ favouriteCount, limit, onLimitChange, searchValue, onSearchChange }) {
  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">

<div className="hidden sm:block shrink-0">
          <h1 className="font-display text-brand-rose text-xl sm:text-2xl tracking-tight">
            Luminary <span className="text-brand-rose">Gallery</span>
          </h1>
        </div>

        <div className="relative flex-1 max-w-xl mx-auto">
          {/* Search icon */}
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>

          <input
            type="text"
            value={searchValue}
            onChange={onSearchChange}
            placeholder="Search by author name..."
            aria-label="Search photos by author name"
            className="w-full pl-9 pr-8 py-2 rounded-full
                       border border-gray-200 bg-gray-50
                       text-sm font-body text-gray-800
                       placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-brand-rose/30 focus:border-brand-rose/50
                       transition-all duration-200"
          />

          {searchValue && (
            <button
              onClick={() => onSearchChange({ target: { value: '' } })}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2
                         w-5 h-5 flex items-center justify-center
                         rounded-full bg-gray-200 hover:bg-gray-300
                         text-gray-500 text-xs transition-all"
            >
              ✕
            </button>
          )}
        </div>

        {/* ── Right side controls ────────────────────────────── */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Limit selector */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:block text-xs text-gray-400 font-body whitespace-nowrap">
              Show
            </span>
            <select
              value={limit}
              onChange={(e) => onLimitChange(Number(e.target.value))}
              aria-label="Number of photos to load"
              className="appearance-none text-xs font-body font-medium
                         text-gray-700 bg-gray-100 hover:bg-gray-200
                         px-3 py-1.5 pr-7 rounded-full border border-gray-200
                         focus:outline-none focus:border-brand-rose/50
                         transition-all duration-200 cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 8px center',
              }}
            >
              {LIMIT_OPTIONS.map(opt => (
                <option key={opt} value={opt}>{opt} photos</option>
              ))}
            </select>
          </div>

          {/* Divider */}
          <div className="w-px h-4 bg-gray-200" />

          {/* Favourites badge */}
          {favouriteCount > 0 ? (
            <div className="flex items-center gap-1.5 bg-brand-rose text-white
                            text-xs font-body font-semibold px-3 py-1.5
                            rounded-full shadow-sm animate-fade-up">
              <span>♥</span>
              <span>{favouriteCount} saved</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 border border-gray-200
                            text-gray-400 text-xs font-body px-3 py-1.5 rounded-full">
              <span>♡</span>
              <span>0 saved</span>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}