/** @type {import('next').NextConfig} */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://assets.calendly.com https://calendly.com",
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://calendly.com",
  "img-src 'self' data: https: blob:",
  "font-src 'self' data: https://assets.calendly.com",
  "connect-src 'self' https://*.google-analytics.com https://www.googletagmanager.com https://api.calendly.com https://calendly.com https://api.indexnow.org",
  "frame-src 'self' https://calendly.com https://*.calendly.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://calendly.com",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
  "report-uri https://kerblabs.com/api/csp-report",
].join("; ");

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
    value:
      "browsing-topics=(), camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-site" },
  // Enforced CSP (was Report-Only). The Calendly + GA / GTM + IndexNow + self
  // surface is exercised by every page; if a new third-party drops in, add it
  // to the directive above rather than reverting to Report-Only.
  { key: "Content-Security-Policy", value: csp },
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
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
