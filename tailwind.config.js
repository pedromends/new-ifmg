module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none', // add required value here
          }
        }
      },
      borderWidth: {
        '1': '1px',
        '12': '12px',
        '16': '16px',
      },
      colors: {
        'maingreen': '#2F9E40',
        'maingray': '#4B5563',
        'lightgray': '#F6F6F6',
        'fttitle': '#8E9FA6',
        'ftlink': '#425E6A',
        'govblue': '#071D41'
      },
      backgroundImage: {
        'handglass': "url('@/assets/icons/hand-glass.svg')",
        'handglass-blue': "url('@/assets/icons/handglass-govblue.svg')",
        'campus': "url('@/assets/images/campus-ifmg.svg')",
        'whitecircle': "url('@/assets/images/whitecircle.svg')",
      },
      fontFamily: {
        opensans: [
          '"OpenSans"', "sans-serif",
        ],
        raleway: [
          '"Raleway"', "sans-serif",
        ],
      },
      height: {
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '116': '29rem',
        '124': '31rem',
        '128': '32rem',
        '132': '33rem',
        '160': '40rem',
        '180': '45rem',
        '192': '48rem',
        '196': '49rem',
        '216': '54rem',
      },
      spacing: {
        '84': '21rem',
        '100': '25rem',
        '112': '28rem',
        '116': '29rem',
        '124': '31rem',
        '128': '32rem',
        '132': '33rem',
        '160': '40rem',
        '180': '45rem',
        '192': '48rem',
        '196': '49rem',
        '216': '54rem',
      },
      width: {
        '76': '19rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '116': '29rem',
        '124': '31rem',
        '128': '32rem',
        '132': '33rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem',
        '192': '48rem',
        '196': '49rem',
        '216': '54rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography')
  ],
}