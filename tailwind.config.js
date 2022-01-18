module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  screens: {
    '2xl': { max: '1535px' },
    // => @media (max-width: 1535px) { ... }

    xl: { max: '1279px' },
    // => @media (max-width: 1279px) { ... }

    lg: { max: '1023px' },
    // => @media (max-width: 1023px) { ... }

    md: { max: '991px' },
    // => @media (max-width: 991px) { ... }

    sm: { max: '767px' },
    // => @media (max-width: 767px) { ... }
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
