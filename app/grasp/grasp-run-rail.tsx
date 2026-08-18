export function GraspRunRail() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-[3px] bg-black/12" aria-hidden="true">
      <div className="grasp-run-progress h-full w-full origin-left bg-white mix-blend-difference" />
    </div>
  );
}
