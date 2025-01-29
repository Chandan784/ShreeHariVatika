/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "ts2.mm.bing.net",
      "th.bing.com",
      "media.gettyimages.com",
      "source.unsplash.com",
      "media.istockphoto.com",
      "img.freepik.com",
      "www.bing.com",
      "via.placeholder.com",
      "images.app.goo.gl",
      "drive.google.com",
      "mega.nz",
      "res.cloudinary.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/uc",
      },
      {
        protocol: "https",
        hostname: "mega.nz",
        pathname: "/file/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
