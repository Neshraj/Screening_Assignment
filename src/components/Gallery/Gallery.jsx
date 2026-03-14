import PhotoCard from '../PhotoCard/PhotoCard';
export default function Gallery({ photos, favourites, onToggleFavourite }) {
  return (
    <section aria-label="Photo gallery">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {photos.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFavourited={favourites.has(photo.id)}
            onToggle={onToggleFavourite}
            index={index}
          />
        ))}
      </div>

      {/* Photo count footer */}
      <p className="text-center text-xs text-gray-400 font-body mt-10 mb-4">
        Showing {photos.length} photo{photos.length !== 1 ? 's' : ''}
      </p>
    </section>
  );
}