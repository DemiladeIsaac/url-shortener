module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    extend: {
      backgroundPosition: {
        "top-4": "right top 0rem",
      },
      backgroundSize: {
        "50%": "400px 320px",
      },
      backgroundImage: {
        pattern: "url('images/bg-boost-desktop.svg')",
        bannerImg: "url('images/illustration-working.svg')",
      },
      colors: {
        "url-cyan": "hsl(180,66%,49%)",
        "url-darkViolet": "hsl(257,27%,26%)",
        "url-red": "hsl(0,87%,67%)",
        "url-gray": "hsl(0,0%,75%)",
        "url-grayViolet": "hsl(257,7%,63%)",
        "url-darkBlue": "hsl(255,11%,22%)",
        "url-veryDarkViolent": "hsl(260,8%,14%)",
      },
    },
    fontFamily: {
      Poppins: ["Poppins,sans-serif"],
    },
  },
  plugins: [],
};
