interface AKLogoProps {
  size?: number;
  className?: string;
}

export function AKLogo({ size = 32, className }: AKLogoProps) {
  const width = size * (240 / 200);
  const height = size;

  return (
    <svg
      viewBox="0 0 240 200"
      width={width}
      height={height}
      className={className}
      aria-label="AK Logo"
    >
      {/* A — single path so apex is a true miter point */}
      <path
        d="M 15 180 L 62 20 L 109 180"
        fill="none"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinejoin="miter"
        strokeLinecap="butt"
        strokeMiterlimit={20}
      />
      {/* A crossbar */}
      <line
        x1="37"
        y1="128"
        x2="87"
        y2="128"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="butt"
      />
      {/* K stem */}
      <line
        x1="138"
        y1="20"
        x2="138"
        y2="180"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="butt"
      />
      {/* K upper arm */}
      <line
        x1="138"
        y1="100"
        x2="222"
        y2="20"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="butt"
      />
      {/* K lower arm */}
      <line
        x1="138"
        y1="100"
        x2="222"
        y2="180"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="butt"
      />
    </svg>
  );
}
