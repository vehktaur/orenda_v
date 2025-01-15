/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from "fluid-tailwind";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: { files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], extract },
  theme: {
    fontSize,
    screens,
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
        fadeOut: "fadeOut 0.5s ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "filter-open": "filter-open 0.2s ease-out",
        "filter-close": "filter-close 0.2s ease-out",
      },
      backgroundImage: {
        "m-footer":
          "url('/src/assets/footer_bg_tl.png'),url('/src/assets/footer_bg_br.png'),url('/src/assets/footer_bg_r.png')",
        "md-footer":
          "url('/src/assets/md_footer_bg_bl.png'),url('/src/assets/md_footer_bg_tr.png'),url('/src/assets/md_footer_bg_r.png')",
        arrow: "url(/src/assets/select.svg)",
        logo: "url(/src/assets/logo-circle-0.15.png)",
        dotted: "url(/src/assets/dotted.png)",
        search: "url(/src/assets/search.svg)",
        christmas: "url(/src/assets/christmas_tree_bg.jpg)",
      },
      backgroundPosition: {
        "footer-positions": "top left, bottom right, bottom right",
        "md-footer-positions": "bottom left, top right, bottom right",
        "arrow-position": "right 0.5rem top 50%",
      },
      backgroundSize: {
        "footer-size": "auto, auto, 50% 100%",
        "arrow-size": "1.5rem 1.5rem",
      },
      boxShadow: {
        "provider-card": "0px 1px 3px 0px rgba(0, 0, 0, 0.08)",
      },
      colors: {
        "orenda-purple": "#2E0086",
        "orenda-green": "#127801",
        lime: "#ECF5EB",
        "light-grey": "#E5E5E5",
        "off-white": "#FAFAFA",
        "purple-mist": "#F8F8FF",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      content: {
        email: 'url("/src/assets/dark_email.svg")',
        phone: 'url("/src/assets/dark_call.svg")',
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        heading: ["Ogg Text TRIAL", "serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        blog: "minmax(25rem, 70%), minmax(25rem, 30%)",
        team: "repeat(4, minmax(0, 15.625rem))",
        network: "minmax(150px, 17rem), minmax(57.5%, 1fr)",
        autofill: "repeat(auto-fill, minmax(15.2rem, 1fr))",
        maxfill: "repeat(auto-fill, minmax(14.2rem, 1fr))",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            visibility: "hidden",
          },
          "100%": {
            opacity: "1",
            visibility: "visible",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "90%": {
            opacity: "0",
          },
          "100%": {
            visibility: "hidden",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "filter-open": {
          from: {
            width: "0",
          },
          to: {
            height: "20rem",
          },
        },
        "filter-close": {
          from: {
            width: "20rem",
          },
          to: {
            height: "0",
          },
        },
      },
      listStyleImage: {
        dot: 'url("/src/assets/disc.svg")',
      },
      screens: {
        xs: "20rem",
        forLabel: "23.75rem",
        forNav: "75rem",
        forProviders: "70rem",
      },
    },
  },
  plugins: [
    fluid,
    animate,
    require("tailwind-scrollbar")({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
  ],
};
