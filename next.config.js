/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["upcdn.io", "replicate.delivery", "lh3.googleusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/gbednarski/p2",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://p2-gbednarski.vercel.app/",
        permanent: false,
      },
    ];
  },
  env: {
    mongodb_username: 'USERNAME',
    mongodb_password: 'PASSWORD',
    mongodb_db: 'DB',
    NEXTAUTH_URL: 'https://p2-gbednarski.vercel.app/',
    NEXTAUTH_SECRET: 'Ey7nTKnggBc0bRN8WUjyShw2qzOZ6KW4fUyqcKBePxY=',
  },
};
