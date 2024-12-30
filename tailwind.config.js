/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue', '*.{js,vue,ts}', '/*.{js,vue,ts}', './node_modules/flowbite/**/*.{js,ts}', 'presets/**/*.{js,vue,ts}'],
  theme: {
    fontFamily: {
      sans: ["'Pretendard'", 'sans-serif'],
      serif: ["'NanumMyeongjo', 'serif'"],
    },
    extend: {
      zIndex: {
        header: '99999',
        modal: '999999',
        loading: '9999999',
      },
      maxWidth: {
        gui: '90rem',
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
      },
      animation: {
        loading: 'loading',
      },
      colors: {
        primary: {
          100: '#d1d3dc',
          200: '#a3a7b8',
          300: '#747c95',
          400: '#465071',
          500: '#18244e',
          600: '#131d3e',
          700: '#0e162f',
          800: '#0a0e1f',
          900: '#050710',
        },
        secondary: {
          100: '#dfecff',
          200: '#bfd8ff',
          300: '#9ec5ff',
          400: '#7eb1ff',
          500: '#5e9eff',
          600: '#4b7ecc',
          700: '#385f99',
          800: '#263f66',
          900: '#132033',
        },
        blue: {
          100: '#d1d3dc',
          200: '#a3a7b8',
          300: '#747c95',
          400: '#465071',
          500: '#18244e',
          600: '#131d3e',
          700: '#0e162f',
          800: '#0a0e1f',
          900: '#050710',
        },
        black: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#757575',
          600: '#616161',
          700: '#424242',
          800: '#242424',
        },
        naver: {
          logo: '#3baf4a',
        },
        kakao: {
          logo: '#f8e112',
        },
        youtube: {
          logo: '#ec2c29',
        },
      },
      fontSize: {
        xs: [
          '.75rem',
          {
            lineHeight: '1.125rem',
          },
        ],
        sm: [
          '.875rem',
          {
            lineHeight: '1.3125rem',
          },
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '1.6875rem',
          },
        ],
        xl: [
          '1.3125rem',
          {
            lineHeight: '2rem',
          },
        ],
        '2xl': [
          '1.625rem',
          {
            lineHeight: '2.4375rem',
          },
        ],
        '3xl': [
          '1.9375rem',
          {
            lineHeight: '2.9375rem',
          },
        ],
        '4xl': [
          '2.5rem',
          {
            lineHeight: '3.75rem',
          },
        ],
        '5xl': [
          '3rem',
          {
            lineHeight: '4.5rem',
          },
        ],
        '6xl': [
          '3.75rem',
          {
            lineHeight: '5.625rem',
          },
        ],
        '7xl': [
          '4.5rem',
          {
            lineHeight: '6.75rem',
          },
        ],
        '8xl': [
          '6rem',
          {
            lineHeight: '9rem',
          },
        ],
        '9xl': [
          '8rem',
          {
            lineHeight: '12rem',
          },
        ],
        '10xl': [
          '9rem',
          {
            lineHeight: '13.5rem',
          },
        ],
        '11xl': [
          '12rem',
          {
            lineHeight: '18rem',
          },
        ],
        '12xl': [
          '15rem',
          {
            lineHeight: '22.5rem',
          },
        ],
      },
    },
    corePlugins: {
      aspectRatio: false,
    },
  },
  mode: 'jit',
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/container-queries'), require('tailwindcss-animated'), require('flowbite/plugin')],
};
