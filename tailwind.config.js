/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: ["Open Sans", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
      display: [
        "Montserrat",
        "Open Sans",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
      ],
    },
  },
  plugins: [],
};
