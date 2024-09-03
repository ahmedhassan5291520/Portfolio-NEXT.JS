/** @type {import('next').NextConfig} */
module.exports = {
  // Add your other Next.js configurations here (optional)

  images: {
    remotePatterns: [
      {
        hostname: 'pbs.twimg.com',
      },
      {
        hostname: 'i.ibb.co',
      },
      {
        hostname: 'media.licdn.com',
      },
    ],
  },
};