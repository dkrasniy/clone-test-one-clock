module.exports = { 
  purge: {
    enabled: true,
    content: ['./src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js'],
  },
  theme: {
    extend: {
      colors: {
        red: {
          '100': '#ebf5fe',
          '200': '#9dcefb',
          '300': '#3a9cf8',
          '400': '#0981f1',
          '500': '#0874d9',
          '600': '#0767c0',
          '700': '#0657a2',
          '800': '#0657a2',
          '900': '#032d54',
        }, 
      },
    },
  },
  variants: {},
  plugins: [],
}
