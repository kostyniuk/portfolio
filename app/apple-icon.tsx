import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 180,
        height: 180,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1a1a1c",
        borderRadius: 32,
      }}
    >
      <svg viewBox="0 0 240 200" width={112} height={93} style={{ display: "block" }}>
        {/* A — single path so apex is a true miter point */}
        <path
          d="M 15 180 L 62 20 L 109 180"
          fill="none"
          stroke="#f5f5f3"
          strokeWidth="16"
          strokeLinejoin="miter"
          strokeLinecap="butt"
          strokeMiterlimit={20}
        />
        {/* A crossbar */}
        <line x1="37" y1="128" x2="87" y2="128" stroke="#f5f5f3" strokeWidth="16" strokeLinecap="butt" />
        {/* K stem */}
        <line x1="138" y1="20" x2="138" y2="180" stroke="#f5f5f3" strokeWidth="16" strokeLinecap="butt" />
        {/* K upper arm */}
        <line x1="138" y1="100" x2="222" y2="20" stroke="#f5f5f3" strokeWidth="16" strokeLinecap="butt" />
        {/* K lower arm */}
        <line x1="138" y1="100" x2="222" y2="180" stroke="#f5f5f3" strokeWidth="16" strokeLinecap="butt" />
      </svg>
    </div>,
    {
      ...size,
    },
  );
}
