module.exports = {
  corePlugins: {},
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screen: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: '#1E293B',
      'theme-bg': '#111827',
      white: '#FFFFFF',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
