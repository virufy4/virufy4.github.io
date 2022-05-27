module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minWidth: {
      110: "110px",
      150: "180px",
      250: "250px",
      "1/10": "10vw",
    },
    extend: {
      colors: {
        primary: "#3074DC", // Buttons
        secondary: {
          100: "#3074DC", // Footer Background
          // 200: "#4F9186", // links
          200: "#393939", // links, subtitle quentios in FAQ
        },
        green: {
          DEFAULT: "#60E954",
          100: "#D7E9E6", //cyan color for pg background
          200: "#F0F9F6", // light green for pg background
        },
        blue: {
          DEFAULT: "#3074DC",
          100: "#F0F6FF", //cyan color for pg background
          200: "#FFFFF",
        },
        black: "#393939",
        filler: "rgba(172, 224, 215, 0.05)",
        divider: {
          100: "#8C8CA1",
          200: "#C5C5E2",
        },
        gray: {
          DEFAULT: "#F5F5F3", //background
          100: "#F5F5F3", //cyan color for pg background
          200: "#EDEDED", // light green for pg background
        },
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "56.25%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": " 60",
        "4/5": "80%",
      },
      height: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "30rem",
      },
      fontFamily: {
        heading: ["'Montserrat'"],
        body: ["'Montserrat'"],
        montserrat: [
          "'Montserrat'",
          "Montserrat Alternates",
          "Montserrat Subbrayada",
        ],
      },
      fontSize: {
        "5xl": [
          "3rem",
          {
            lineHeight: "4.2rem",
          },
        ],
        "6xl": [
          "3.55rem",
          {
            lineHeight: "4.25rem",
          },
        ],
      },
      inset: {
        "-12": "-3rem",
        "-16": "-4rem",
        "-20": "-5rem",
      },
      borderWidth: {
        "1/2": "0.5px",
      },
      margin: {
        36: "9rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        128: "32rem",
      },
      padding: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "5.5rem",
      },
      screens: {
        xs: { max: "640px" },
        xl: "1092px",
        "2xl": "1440px",
        "3xl": "1680px",
        "4xl": "1920px",
      },
      textColor: {
        gray: {
          100: "#1F1F1F", // Body text
          200: "#434343", // Sub-headings
          300: "#2D2D2D", // Main heading
          400: "#21242C", // Mobile nav text
          500: "#979797", //black 50% opacity
        },
        teal: "#13C2C2",
      },
      zIndex: {
        "-10": "-10",
      },
      keyframes: {
        bannermove: {
          "0%": {
            transform: "translateX(7%)",
          },
          "100%": {
            transform: "translateX(calc(-1 * (100% - (100vw - 30vw))))",
          },
        },
        bannermove_oyw: {
          "0%": {
            transform: "translateX(-900px)",
          },
          "100%": {
            transform: "translateX(600px)",
          },
        },
      },
      animation: {
        bannermove: "bannermove 42s linear infinite",
        bannermove_oyw: "bannermove_oyw 42s linear infinite",
      },
      width: {
        md: "1200px",
      },
    },
  },
  variants: {
    display: ["responsive", "hover", "group-hover"],
    pointerEvents: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
