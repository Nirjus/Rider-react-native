/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        ParkinsansBold: ["Parkinsans-Bold", "sans-serif"],
        ParkinsansSemiBold: ["Parkinsans-SemiBold", "sans-serif"],
        ParkinsansExtraBold: ["Parkinsans-ExtraBold", "sans-serif"],
        ParkinsansLight: ["Parkinsans-Light", "sans-serif"],
        ParkinsansMedium: ["Parkinsans-Medium", "sans-serif"],
        Parkinsans: ["Parkinsans-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
