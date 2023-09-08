module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    autoprefixer: {},
    tailwindcss: require("./tailwind.config.cjs"),
  },
}
