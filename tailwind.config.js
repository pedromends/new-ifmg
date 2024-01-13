module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      borderWidth: {
        '12': '12px',
        '16': '16px',
      },
      colors: {
        'maingreen': '#2F9E40',
        'maingray': '#4B5563',
        'lightgray': '#F6F6F6'
      },
      backgroundImage: {
        'handglass': "url('@/assets/icons/hand-glass.svg')",
        'campus': "url('@/assets/images/campus-ifmg.svg')",
        'whitecircle': "url('@/assets/images/whitecircle.svg')",
      },
      width: {
        '88': '22rem',
        '100': '25rem',
        '116': '29rem',
        '128': '32rem',
        '132': '33rem',
        '160': '40rem',
        '180': '45rem',
        '192': '48rem',
        '216': '54rem',
      },
      height: {
        '88': '22rem',
        '100': '25rem',
        '116': '29rem',
        '128': '32rem',
        '132': '33rem',
        '160': '40rem',
        '180': '45rem',
        '192': '48rem',
        '216': '54rem',
      },
      fontFamily: {
        opensans: ['"OpenSans"', "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}