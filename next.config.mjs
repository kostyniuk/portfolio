/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "www\\.lovable\\.a13x\\.space(?::\\d+)?",
            },
          ],
          destination: "/lovable",
        },
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "elevenlabs\\.a13x\\.space(?::\\d+)?",
            },
          ],
          destination: "/elevenlabs",
        },
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "legora\\.a13x\\.space(?::\\d+)?",
            },
          ],
          destination: "/legora",
        },
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "spotify\\.a13x\\.space(?::\\d+)?",
            },
          ],
          destination: "/spotify",
        },
      ],
    };
  },
};

export default nextConfig;
