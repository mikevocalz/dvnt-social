/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
<<<<<<< HEAD
      "../../packages/ui/src/**/*.{js,jsx,ts,tsx}"
=======
      "../../packages/app/**/*.{js,jsx,ts,tsx}",
      "../../packages/app/ui/src/**/*.{js,jsx,ts,tsx}"
>>>>>>> pr-2
    ],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {},
    },
    plugins: [],
<<<<<<< HEAD
  }
=======
  }
>>>>>>> pr-2
