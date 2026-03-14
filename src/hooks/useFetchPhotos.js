import { useState, useEffect } from 'react';
import { buildApiUrl } from '../constants/api';

/**
 * @param {number} limit — number of photos to fetch
 * @returns {{ photos: Array, loading: boolean, error: string|null }}
 */
export function useFetchPhotos(limit) {
  const [photos,  setPhotos]  = useState([]);      // the fetched photo array
  const [loading, setLoading] = useState(true);    // true = show spinner
  const [error,   setError]   = useState(null);    // null = no error

  useEffect(() => {
    let isCancelled = false;

    const fetchPhotos = async () => {
      try {
        setLoading(true);  // show spinner
        setError(null);    // clear any previous error
        setPhotos([]);     // clear stale photos so old grid doesn't flash

        const response = await fetch(buildApiUrl(limit));

        if (!response.ok) {
          throw new Error(
            `Failed to load photos (${response.status} ${response.statusText})`
          );
        }

        const data = await response.json();

        // Only update state if component is still mounted
        if (!isCancelled) {
          setPhotos(data);
        }

      } catch (err) {
        if (!isCancelled) {
          setError(
            err.message || 'Something went wrong. Please try again.'
          );
        }

      } finally {
        // finally runs whether fetch succeeded or failed
        if (!isCancelled) {
          setLoading(false); // hide spinner either way
        }
      }
    };

    fetchPhotos(); // kick off the async function

    // CLEANUP: runs when component unmounts
    return () => {
      isCancelled = true;
    };

  }, [limit]); // re-fetch whenever limit changes

  return { photos, loading, error };
}