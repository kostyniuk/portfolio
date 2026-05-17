import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Alex Kostyniuk — Software Engineer & Team Lead at AMFG";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const profileImageData = await readFile(join(process.cwd(), "public/profile.jpg"));
  const profileImageBase64 = `data:image/jpeg;base64,${profileImageData.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "80px",
        background: "#1a1a1c",
        color: "#f5f5f3",
      }}
    >
      {/* Left side: Logo, name, title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        {/* Top: Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg viewBox="0 0 240 200" width={72} height={60} style={{ display: "block" }}>
            <path
              d="M 15 180 L 62 20 L 109 180"
              fill="none"
              stroke="#f5f5f3"
              strokeWidth="16"
              strokeLinejoin="miter"
              strokeLinecap="butt"
              strokeMiterlimit={20}
            />
            <line x1="37" y1="128" x2="87" y2="128" stroke="#f5f5f3" strokeWidth="16" strokeLinecap="butt" />
            <line x1="138" y1="20" x2="138" y2="180" stroke="#f5f5f3" strokeWidth="16" strokeLinecap="butt" />
            <line x1="138" y1="100" x2="222" y2="20" stroke="#f5f5f3" strokeWidth="16" strokeLinecap="butt" />
            <line x1="138" y1="100" x2="222" y2="180" stroke="#f5f5f3" strokeWidth="16" strokeLinecap="butt" />
          </svg>
        </div>

        {/* Center: Name and title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Alex Kostyniuk
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 500,
              color: "#e0e0e0",
              letterSpacing: "-0.01em",
            }}
          >
            Software Engineer & Team Lead at AMFG
          </div>
          <div
            style={{
              fontSize: "26px",
              fontWeight: 400,
              color: "#a0a0a0",
              lineHeight: 1.5,
              maxWidth: "480px",
            }}
          >
            Open source contributor. Creator of GlassCN, Mellow Lines & LeeHireMe. TypeScript, React & Node.js. Located
            in Stockholm.
          </div>
        </div>

        {/* Bottom: URL with accent dot */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "24px",
            fontWeight: 400,
            color: "#a0a0a0",
            letterSpacing: "0.04em",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#6b7ff0",
            }}
          />
          a13x.space
        </div>
      </div>

      {/* Right side: Profile photo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "60px",
        }}
      >
        <img
          src={profileImageBase64}
          width={400}
          height={400}
          style={{
            borderRadius: "24px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>,
    {
      ...size,
    },
  );
}
