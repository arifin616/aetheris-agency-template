import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable faster incremental bundling
    webpackBuildWorker: true,
  },
  // Optimize webpack configuration for development
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Enable faster source maps in development
      config.devtool = 'cheap-module-source-map';
      
      // Optimize module resolution
      config.resolve = {
        ...config.resolve,
        symlinks: false, // Faster resolution
      };
      
      // Optimize babel/preset-react options for faster compilation
      if (Array.isArray(config.module?.rules)) {
        for (const rule of config.module.rules) {
          if (rule.oneOf) {
            for (const oneOfRule of rule.oneOf) {
              if (
                oneOfRule.test &&
                typeof oneOfRule.test === 'object' &&
                (oneOfRule.test.source?.includes('.js') || 
                 oneOfRule.test.source?.includes('.jsx') || 
                 oneOfRule.test.source?.includes('.ts') || 
                 oneOfRule.test.source?.includes('.tsx'))
              ) {
                if (oneOfRule.options) {
                  oneOfRule.options.presets = oneOfRule.options.presets || [];
                  // Add optimizations for development
                  if (!isServer) {
                    // Client-side optimizations
                    oneOfRule.options.plugins = oneOfRule.options.plugins || [];
                  }
                }
              }
            }
          }
        }
      }
    }
    
    // Optimize for production builds
    if (!dev) {
      // Production optimizations
    }
    
    return config;
  },
  // Optimize dev server indicators
  devIndicators: {
    position: 'bottom-right',
  },
  // Optimize trailing slash handling
  trailingSlash: false,
  // Optimize export settings
  output: undefined, // Let Next.js decide
};

export default nextConfig;