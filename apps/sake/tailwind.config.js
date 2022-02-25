module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#525252',
        darker: '#414141',
        disabled: '#2d2d2d',
        golden: '#6f613d',
        pinkish: '#de5770',
      },
      lineHeight: {
        12: '3rem',
      },
      height: {
        100: '28rem',
        110: '36rem',
        120: '48rem',
      },
      width: {
        100: '28rem',
        110: '36rem',
        120: '48rem',
      },
      margin: {
        '-100': '-28rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
