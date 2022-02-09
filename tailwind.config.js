const colors = require('tailwindcss/colors');

module.exports = {
  purge: { content: ['./src/**/*.tsx', './src/components/*.ts'] },
  darkMode: false,
  theme: {
    screens: {
      xs: '320px',
      sm: '641px',
      md: '768px',
      lg: '1025px',
      xl: '1281px'
      // '2xl': '1537px'
    },
    colors: {
      black: colors.black,
      white: colors.white,
      red: colors.red,
      blue: colors.blue,
      transparent: 'transparent',
      primary: '#4A5568',
      secondary: '#9B9B99',
      borderColor: '#E5E5E5',
      buttonColor: '#383A48',
      footerBackground: '#2F3239',
      customColors: {
        100: '#383A48',
        200: '#808080',
        300: '#9B9B9B',
        400: '#C2C2C2',
        500: '#DA1A22',
        600: '#E72931',
        700: '#EA3338',
        800: '#777777',
        900: '#333333',
        1000: '#eeeeee',
        1100: '#D6D6D6'
      },
      customBackground: {
        100: '#FCFCFE',
        200: '#FCFBFB',
        300: '#F9F9F9',
        400: '#F4F4F4',
        500: '#f6f6f6',
        600: '#e9e9e9',
        700: '#dcdcdc',
        800: '#f9f9f9',
        900: '#ececec'
      }
    },
    fontFamily: {},
    zIndex: {
      1: -1,
      0: 0,
      10: 10,
      20: 20,
      25: 25,
      30: 30,
      40: 40,
      50: 50,
      75: 75,
      99: 99,
      100: 100,
      999: 999,
      9999: '9999',
      auto: 'auto',
      modal: '999999',
      options: '9999999'
    },
    opacity: {
      0: '0',
      25: '.25',
      75: '.75',
      10: '.1',
      20: '.2',
      30: '.3',
      40: '.4',
      50: '.5',
      60: '.6',
      70: '.7',
      80: '.8',
      90: '.9',
      95: '.95',
      100: '1'
    },
    variants: {
      container: {}
    },
    extend: {
      letterSpacing: {
        relaxed: '0.01em',
        loose: '0.3em'
      },
      backgroundImage: {},
      fontSize: {
        '1sm': '13px',
        '1xs': '11px',
        '2xs': '10px',
        '3xs': '9px',
        '4xs': '8px',
        '2.5xl': '28px'
      },
      maxWidth: {
        '2xs': '15rem',
        '5.5xl': '68rem'
      },
      height: {
        106: '34rem'
      },
      width: {
        88: '22rem'
      }
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
      borderWidth: ['focus'],
      borderColor: ['focus'],
      outline: ['focus'],
      backgroundColor: ['after'],
      backgroundImage: ['after']
    }
  },
  corePlugins: {
    // ...
    placeholderColor: false,
    animation: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropFilter: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    backgroundBlendMode: false,
    backgroundOrigin: false,
    blur: false,
    boxDecorationBreak: false,
    brightness: false,
    caretColor: false,
    clear: false,
    contrast: false,
    divideOpacity: false,
    divideStyle: false,
    filter: false,
    float: false,
    fontVariantNumeric: false,
    gradientColorStops: false,
    grayscale: false,
    hueRotate: false,
    isolation: false,
    mixBlendMode: false,
    overscrollBehavior: false,
    placeItems: false,
    placeSelf: false,
    saturate: false,
    sepia: false,
    skew: false,
    stroke: false,
    strokeWidth: false,
    tableLayout: false
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/ui'),
    require('tailwindcss-pseudo-elements')
  ]
};
