/** 
 @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'randomuser.me', "./public/assests/", "i.postimg.cc"],
  },
  experimental: {
    reactRoot: true,
    suppressHydrationWarning: true,
  }
}

module.exports = nextConfig
