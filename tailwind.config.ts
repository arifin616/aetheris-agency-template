import type { Config } from 'tailwindcss';

const config: Config = {
  // Optimize content paths for faster scanning
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Theme is controlled via CSS variables in globals.css
    },
  },
  plugins: [],

};
export default config;