import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// module.exports = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// }
export default nextConfig;
