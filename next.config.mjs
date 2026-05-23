/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  images: {
    // Serve AVIF first, then WebP, falling back to original on unsupported clients.
    formats: ["image/avif", "image/webp"],
    // Reasonable device-width breakpoints — keeps generated srcset small.
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 560, 768],
    // Cache optimized images for 1 hour at the edge (Next default is 60s).
    minimumCacheTTL: 3600,
    // Allow remote hosts we currently embed. Calendly inline-script
    // widget pulls its asset bundles from assets.calendly.com.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.calendly.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "calendly.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
