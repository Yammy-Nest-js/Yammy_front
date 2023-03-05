module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:3001/:path*',
      },
    ];
  },
};
