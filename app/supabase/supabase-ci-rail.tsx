export function SupabaseCiRail() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-[3px] bg-white/10" aria-hidden="true">
      <div className="supabase-ci-progress h-full w-full origin-left bg-white mix-blend-difference" />
    </div>
  );
}
