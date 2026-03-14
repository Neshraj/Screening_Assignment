function SkeletonCard({ delay = 0 }) {
  return (
    <div
      className="rounded-2xl overflow-hidden animate-fade-up"
      style={{
        animationDelay: `${delay}ms`,
        background: '#1a1a1a',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      {/* Image area */}
      <div
        className="aspect-[4/3] relative overflow-hidden"
        style={{ background: '#2f2f43' }}
      >
        {/* Shimmer sweep */}
        <div className="absolute inset-0 shimmer" />

        {/* Fake badge */}
        <div
          className="absolute top-3 left-3 w-16 h-4 rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.07)' }}
        >
          <div className="h-full shimmer" />
        </div>

        {/* Fake heart button */}
        <div
          className="absolute top-3 right-3 w-8 h-8 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.10)',
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 inset-x-0 h-10"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }}
        />
      </div>

      {/* Author area — solid dark so nothing bleeds through */}
      <div
        className="px-3.5 py-3 space-y-2"
        style={{
          background: '#1a1a1a',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Author name bar */}
        <div
          className="h-2.5 rounded-full overflow-hidden"
          style={{ width: '65%', background: '#2a2a2a' }}
        >
          <div className="h-full shimmer" />
        </div>

        {/* ID bar */}
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ width: '30%', background: '#242424' }}
        >
          <div className="h-full shimmer" />
        </div>
      </div>
    </div>
  );
}

export default function Spinner() {
  return (
    <div role="status" aria-label="Loading photos">

      {/* Spinner + label */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="relative w-5 h-5">
          <div className="absolute inset-0 rounded-full border-2 border-brand-border" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-rose animate-spin" />
        </div>
        <p className="text-xs text-brand-muted font-body tracking-widest uppercase">
          Loading gallery...
        </p>
      </div>

      {/* Skeleton grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <SkeletonCard key={i} delay={i * 50} />
        ))}
      </div>

    </div>
  );
}