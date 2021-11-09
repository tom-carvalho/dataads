module.exports = {
  async rewrites() {
    console.log(process.env.NEXT_PUBLIC_API_URL)
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}:path*`,
      },
    ]
  },
};