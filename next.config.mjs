/** @type {import('next').NextConfig} */
const cspReportOnly = [
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
  { key: "Content-Security-Policy-Report-Only", value: cspReportOnly },
];

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
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
