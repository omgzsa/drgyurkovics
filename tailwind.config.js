module.exports = {
  darkMode: 'class',
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
    `./formkit.config.js`,
  ],
  theme: {
    fontFamily: {
      body: 'var(--ff-body)',
      display: 'var(--ff-display)',
    },
    extend: {
      colors: {
        primary: {
          100: 'var(--clr-primary-1)',
          200: 'var(--clr-primary-2)',
          300: 'var(--clr-primary-3)',
        },
        secondary: {
          100: 'var(--clr-secondary-1)',
          200: 'var(--clr-secondary-2)',
          300: 'var(--clr-secondary-3)',
        },
        warning: {
          100: 'var(--clr-warning-1)',
          200: 'var(--clr-warning-2)',
        },
      },
      screens: {
        xs: '420px',
      },
    },
  },
  variants: {},
};
