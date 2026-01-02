/** @type {import('tailwindcss').Config} */
import nativewindPreset from 'nativewind/preset';

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
<<<<<<< HEAD
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}'
=======
    '../../packages/app/**/*.{js,jsx,ts,tsx}',
    '../../packages/app/ui/src/**/*.{js,jsx,ts,tsx}'
>>>>>>> pr-2
  ],
  presets: [nativewindPreset],
  theme: {
    extend: {},
  },
  plugins: [],
}
