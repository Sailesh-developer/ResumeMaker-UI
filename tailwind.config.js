/** @type {import('tailwindcss').Config} */


module.exports =  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3)",
        right: "10px 0px 10px -5px rgba(0, 0, 0, 0.3)",
      },
        fontFamily: {
        arial: ['Arial', 'Helvetica', 'sans-serif'],
        times: ['"Times New Roman"', 'Times', 'serif'],
      },
       fontSize: {
         '11px': '11px',
         '13px' : '13px',
         '19px' : '19px',
      },
    },
       backgroundImage: {
            "button-gradient": "linear-gradient(to right, #52E5E7, #130CB7)"
      },
  },
  plugins: [
        function ({ addUtilities }) {
      addUtilities({
        '.page-break': {
          'page-break-before': 'always',
          'break-after': 'page',
        },
      });
    },
  ],
}