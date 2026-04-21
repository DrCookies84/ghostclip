import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00BCE3',
          bright: '#22D3F5',
          dim: '#0891A8',
        },
      },
    },
  },
  plugins: [],
};

export default config;
