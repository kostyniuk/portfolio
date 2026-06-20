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
      ],
    };
  },
};

export default nextConfig;
