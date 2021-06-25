module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://18.117.123.22:5000/:path*',
        },
      ]
    },
};