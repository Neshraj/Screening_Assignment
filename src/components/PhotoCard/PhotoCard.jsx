import { memo } from 'react';
const PhotoCard = memo(function PhotoCard({ photo, isFavourited, onToggle, index }) {
  const imageUrl = `https://picsum.photos/id/${photo.id}/400/300`;

  return (
    <article
      className="relative group rounded-2xl overflow-hidden bg-white shadow-md
                 card-hover animate-fade-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >

      {/* ── Photo Image ─────────────────────────────────────── */}
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={`Photo by ${photo.author}`}
          loading="lazy"  // browser lazy-loads — images below fold load on scroll
          className="w-full h-full object-cover transition-transform duration-500
                     group-hover:scale-105"
        />
      </div>

      {/* ── Author Name Overlay ──────────────────────────────── */}
      <div className="absolute inset-x-0 bottom-0 h-16
                      bg-gradient-to-t from-black/75 via-black/30 to-transparent
                      flex items-end px-3 pb-3">
        <p className="text-white text-xs font-body font-medium truncate w-full pr-8">
          {photo.author}
        </p>
      </div>

      {/* ── Favourite Heart Button ───────────────────────────── */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent any parent click handlers
          onToggle(photo.id);
        }}
        aria-label={
          isFavourited
            ? `Remove ${photo.author}'s photo from favourites`
            : `Add ${photo.author}'s photo to favourites`
        }
        aria-pressed={isFavourited}
        className={`
          absolute top-3 right-3
          w-9 h-9 rounded-full
          flex items-center justify-center
          text-sm
          shadow-md
          transition-all duration-200
          focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-rose
          ${isFavourited
            ? 'bg-brand-rose text-white scale-110 shadow-brand-rose/40'
            : 'bg-white/80 backdrop-blur-sm text-gray-400 hover:text-brand-rose hover:bg-white hover:scale-110'
          }
        `}
      >
        {isFavourited ? '♥' : '♡'}
      </button>

    </article>
  );
});

export default PhotoCard;