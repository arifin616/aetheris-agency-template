import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable faster incremental bundling
    webpackBuildWorker: true,
  },
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