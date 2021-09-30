module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://3.131.69.11:5000/:path*',
      },
    ]
  },
};