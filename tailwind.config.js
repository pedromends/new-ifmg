module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'maingreen': '#2F9E40',
      },
      backgroundImage: {
        'handglass': "url('@/assets/icons/hand-glass.svg')",
        'campus': "url('@/assets/images/campus-ifmg.svg')",
      },
      width: {
        '128': '32rem',
        '180': '45rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}