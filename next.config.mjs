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
              value: "(?:www\\.)?spotify\\.a13x\\.space(?::\\d+)?",
            },
          ],
          destination: "/spotify",
        },
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "(?:www\\.)?hm\\.a13x\\.space(?::\\d+)?",
            },
          ],
          destination: "/hm",
        },
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "(?:www\\.)?sana\\.a13x\\.space(?::\\d+)?",
            },
          ],
          destination: "/sana",
        },
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "(?:www\\.)?aira\\.a13x\\.space(?::\\d+)?",
            },
          ],
          destination: "/aira",
        },
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "(?:www\\.)?grasp\\.a13x\\.space(?::\\d+)?",
            },
          ],
          destination: "/grasp",
        },
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "(?:www\\.)?supabase\\.a13x\\.space(?::\\d+)?",
            },
          ],
          destination: "/supabase",
        },
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "(?:www\\.)?tandem\\.a13x\\.space(?::\\d+)?",
            },
          ],
          destination: "/tandem",
        },
      ],
    };
  },
};

export default nextConfig;
