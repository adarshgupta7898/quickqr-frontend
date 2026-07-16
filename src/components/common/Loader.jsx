/**
 * Inline SVG spinner.
 * @param {{ size?: "sm"|"md"|"lg", className?: string }} props
 */
export function Spinner({ size = "md", className = "" }) {
  const sz = { sm: "h-4 w-4", md: "h-7 w-7", lg: "h-11 w-11" }[size];
  return (
    <svg
      className={`animate-spin text-blue-600 ${sz} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-label="Loading"
    >
      <circle
        className="opacity-25"
        cx="12" cy="12" r="10"
        stroke="currentColor" strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>
  );
}

/** Full-page centred loader. */
export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <Spinner size="lg" />
    </div>
  );
}

/** Skeleton placeholder for a QR history card. */
export function SkeletonCard() {
  return (
    <div className="card animate-pulse flex flex-col gap-3">
      <div className="w-full aspect-square rounded-xl bg-slate-200" />
      <div className="h-4 w-3/4 rounded bg-slate-200" />
      <div className="h-3 w-1/2 rounded bg-slate-200" />
      <div className="h-3 w-full rounded bg-slate-200" />
      <div className="h-3 w-5/6 rounded bg-slate-200" />
      <div className="flex gap-2 mt-1">
        <div className="h-9 flex-1 rounded-xl bg-slate-200" />
        <div className="h-9 flex-1 rounded-xl bg-slate-200" />
      </div>
    </div>
  );
}

export default Spinner;
