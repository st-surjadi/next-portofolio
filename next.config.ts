import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dlnquklju/**",
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ["import", "legacy-js-api"],
  },
};

export default nextConfig;
