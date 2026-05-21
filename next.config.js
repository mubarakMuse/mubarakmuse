const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'youtu.be',
      },
      {
        protocol: 'https',
        hostname: 'www.loom.com',
      },
      {
        protocol: 'https',
        hostname: 'loom.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/supakid",
        destination: "https://supakidapp.com",
        permanent: true,
      },
      {
        source: "/goldy",
        destination: "https://goldyphone.com",
        permanent: true,
      },
      {
        source: "/brighter-tunnel",
        destination: "/technical-interviews",
        permanent: true,
      },
      {
        source: "/brighter-tunnel/:path*",
        destination: "/technical-interviews",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/plausible/js/script.js",
        destination: "https://plausible.io/js/script.js",
      },
      {
        source: "/plausible/api/event",
        destination: "https://plausible.io/api/event",
      },
    ];
}
};


module.exports = nextConfig;
