/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

export default {
  content: { files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], extract },
  theme: {
    screens,
    fontSize,
    extend: {
      backgroundImage: {
        'm-footer':
          "url('/src/assets/footer_bg_tl.png'),url('/src/assets/footer_bg_br.png'),url('/src/assets/footer_bg_r.png')",
        'md-footer':
          "url('/src/assets/md_footer_bg_bl.png'),url('/src/assets/md_footer_bg_tr.png'),url('/src/assets/md_footer_bg_r.png')"
      },
      backgroundPosition: {
        'footer-positions': 'top left, bottom right, bottom right',
        'md-footer-positions': 'bottom left, top right, bottom right'
      },
      backgroundSize: {
        'footer-size': 'auto, auto, 50% 100%'
      },
      boxShadow: {
        'provider-card': '0px 1px 3px 0px rgba(0, 0, 0, 0.08)'
      },
      colors: {
        'orenda-purple': '#2E0086',
        'orenda-green': '#127801'
      },
      content: {
        email: 'url("/src/assets/dark_email.svg")',
        phone: 'url("/src/assets/dark_call.svg")',
      },
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        heading: ["'Ogg Text TRIAL'", 'serif'],
        'dm-sans': ['"DM Sans"', 'sans-serif']
      },
      listStyleImage: {
        dot: 'url("/src/assets/disc.svg")'
      },
      screens: {
        forLabel: '23.75rem',
        xs: '20rem'
      }
    }
  },
  plugins: [fluid]
};
