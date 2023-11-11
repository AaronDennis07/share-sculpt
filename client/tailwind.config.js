/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme:{
    extend:{
      backgroundColor:{
        'onH': "#2c974b"
      },
      boxShadow:{
        'git': "rgba(27, 31, 35, .1) 0 1px 0"
      }
    }
  },
  plugins: [require("daisyui")],
}
