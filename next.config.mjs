const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://use.fontawesome.com https://kit.fontawesome.com https://ka-f.fontawesome.com https://www.googletagmanager.com https://www.google.com https://www.gstatic.com;
    style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://use.fontawesome.com https://use.typekit.net https://p.typekit.net https://ka-f.fontawesome.com;
    font-src 'self' data: https://cdnjs.cloudflare.com https://use.fontawesome.com https://use.typekit.net https://p.typekit.net https://ka-f.fontawesome.com;
    img-src 'self' data: https://res.cloudinary.com https://placehold.jp https://nextjs.org https://example.com https://use.typekit.net;
    connect-src 'self' https://ka-f.fontawesome.com https://www.google.com https://www.gstatic.com https://use.typekit.net;
    manifest-src 'self';
    object-src 'none';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "nextjs.org",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "use.typekit.net",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
