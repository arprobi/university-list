module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '540px',
      'md': '720px',
      'lg': '960px',
      'xl': '1140px',
      '2xl': '1320px'
    },
    extend: {
      colors: {
        "white": "#FEFFFF",
        "primary": "#00154F",
        "primary-light": "#ACC2FF",
        "secondary": "#F4AF1B",
        "secondary-light": "#FCE6B7",
        "default": "#F2BC94",
        "default-light": "#FBEADD",
        "danger": '#FF1744',
        "danger-light": '#FF6986',
        "gray": "#212121",
        "gray-light": "#CFCFCF",
      }
    },
    container: {
      center: true,
    },
    spacing: {
      '0': '0px',
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '7': '28px',
      '8': '32px',
      '9': '36px',
      '10': '40px',
      '11': '44px',
      '12': '48px'
    },
  },
  plugins: [],
}
