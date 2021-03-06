module.exports = {
  presets: [require('@sushiswap/ui/tailwind')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    'node_modules/@sushiswap/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
      backgroundImage: () => ({
        circuit: "url('/furo/images/circuit.png')",
      }),
      keyframes: {
        dash: {
          to: {
            'stroke-dashoffset': '0',
          },
        },
      },
    },
  },
}
