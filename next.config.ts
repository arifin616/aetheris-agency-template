import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Handle SWC version issues on Vercel
  swcMinify: true,
  // Optimize dev server indicators
  devIndicators: {
    position: 'bottom-right',
  },
  // Optimize trailing slash handling
  trailingSlash: false,
  // Specify output mode
  output: 'standalone', // Better for Vercel deployments
};

export default nextConfig;
