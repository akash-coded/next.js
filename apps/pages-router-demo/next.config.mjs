/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/old-blog/:slug',
        destination: '/new-blog/:slug',
        permanent: true,
      },
      {
        source: '/deprecated-page',
        destination: '/new-homepage',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
