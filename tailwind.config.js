module.exports = { 
  purge: {
    enabled: true,
    content: ['./src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
