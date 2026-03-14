import { useState, useReducer, useEffect, useCallback, useMemo } from 'react';

// Custom hook
import { useFetchPhotos } from './hooks/useFetchPhotos';

// Reducer + action types
import { favouritesReducer, ACTIONS } from './reducers/favouritesReducer';

// localStorage helpers
import { loadFavourites, saveFavourites } from './utils/localStorage';

// Constants
import { DEFAULT_LIMIT } from './constants/api';

// Components
import Header       from './components/Header/Header';
import Gallery      from './components/Gallery/Gallery';
import Spinner      from './components/Spinner/Spinner';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import EmptyState   from './components/EmptyState/EmptyState';


export default function App() {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const { photos, loading, error } = useFetchPhotos(limit);
  const [query, setQuery] = useState('');
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    undefined,
    loadFavourites      // lazy initialiser — reads localStorage once
  );
  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const handleSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({ type: ACTIONS.TOGGLE, payload: photoId });
  }, []);

  const filteredPhotos = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return photos;
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(q)
    );
  }, [photos, query]);

  return (
    <div className="min-h-screen">

      {/* Single sticky header — contains logo, search, limit selector, favourites */}
      <Header
        favouriteCount={favourites.size}
        limit={limit}
        onLimitChange={setLimit}
        searchValue={query}
        onSearchChange={handleSearch}
      />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {loading && <Spinner />}
        {!loading && error && <ErrorMessage message={error} />}
        {!loading && !error && filteredPhotos.length === 0 && (
          <EmptyState query={query} />
        )}
        {!loading && !error && filteredPhotos.length > 0 && (
          <Gallery
            photos={filteredPhotos}
            favourites={favourites}
            onToggleFavourite={handleToggleFavourite}
          />
        )}

      </main>
    </div>
  );
}