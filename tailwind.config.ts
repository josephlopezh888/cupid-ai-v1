import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial-to-tr': 'radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))',
        'gradient-radial-to-tl': 'radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))',
        'gradient-radial-to-br': 'radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))',
        'gradient-radial-to-bl': 'radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))',
        'gradient-radial-to-bc': 'radial-gradient(90% 115% at 100% 100%, var(--tw-gradient-stops))',
        'radial-gradient': 'radial-gradient(217.23% 100.08% at 50% 18.33%, rgba(0, 0, 0, 0.00) 25.67%, #63E 69.34%, #FFF 100%)',
        'fcard': 'radial-gradient(217.23% 100.08% at 50% 18.33%, rgba(14, 14, 14, 0.00) 25.67%, #7F04E3 69.34%, #FF006B 100%)',
        union: "url(/image/union.png)",
        "about-box": "linear-gradient(180deg, #15182F 0%, #131520 100%)",
        stats: "linear-gradient(180deg, rgba(160, 125, 251, 0.01) 62.5%, rgba(111, 60, 246, 0.00) 82.44%, #6F3CF6 100%)",
        testimonial: "url(/image/testimonial.png)",
        footer: "url(/image/footer.png)",
        page: "radial-gradient(217.23% 100.08% at 50% 18.33%, rgba(0, 0, 0, 0.00) 28.00%, rgba(102, 77, 255, 0.15) 41.67%, rgba(255, 0, 107, 0.84) 69.34%, #FFF 100%)",
        pricing: 'radial-gradient(217.23% 100.08% at 50% 18.33%, rgba(0, 0, 0, 0.00) 27.00%, #63E 69.34%, #FFF 100%)'
      },
      colors: {
        violet1: '#7F04E3',
        pink1: '#FF006B',
        btn1: '#2A2B3A',
        tx1: '#77798F',
        slctd1: '#7F04E3',
        vcard1: '#010314',
        tscndry: '#77798F',
        gblue1: '#4467FF',
        gviolet1: '#7241FF',
        uStroke: '#182542',
        uText: '#566179',
        uBG: '#160F2D',
        uIc: '#3F495F',
        sStroke: '#FFFFFF',
        sText: '#FFFFFF',
        sBG: '#664DFF',
        sIc: '#FFFFFF',
        primary: "#7F04E3",
        secondary: "#FF006B",
        paragraph: "#77798F",
        stock: "#2A2B3A",
      },
      borderRadius: {
        btn: '2.5rem',
        "40": "40px"
      },
      spacing: {
        '108': '550px',
        '720': '720px',
        '1280': '1280px',
        '15p': '15%',
        '85p': '85%',
      },
      padding: {
        "container": "100px"
      },
      maxWidth: {
        "container": "1920px",
      },
      height: {
        "51": "51px"
      },

      boxShadow: {
        // : "0px 0px 10px 0px #74F"
        values: "1px 15px 23px 0px rgba(229, 229, 229, 0.25)"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} satisfies Config;
