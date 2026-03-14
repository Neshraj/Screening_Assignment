// The key we use to store favourites in the browser's localStorage
const STORAGE_KEY = 'photo_gallery_favourites';


export function loadFavourites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw));
  } catch {
    return new Set(); // graceful fallback
  }
}

/**
 * @param {Set<string>} favouriteSet
 */
export function saveFavourites(favouriteSet) {
  try {
    // Spread Set into array: [...set] = ["id1", "id2", ...]
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favouriteSet]));
  } catch {
    // Storage quota exceeded — fail silently, don't crash the app
  }
}