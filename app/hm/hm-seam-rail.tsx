export function HmSeamRail() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-[3px] bg-black/10" aria-hidden="true">
      <div className="hm-seam-progress h-full w-full origin-left bg-[#e50010]" />
    </div>
  );
}
