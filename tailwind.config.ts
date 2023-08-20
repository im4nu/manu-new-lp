import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#372443',
      },
      backgroundImage: {
        'mobile-hero': 'url(/images/mobile-hero-bg.png)',
        'hero': 'url(/images/hero-bg.png)',
        'bubles': 'url(/icons/bubles.svg)',
        //cards
        'astronaut': 'url(/images/astronaut.png)',
        'expirience': 'url(/images/expirience.png)',
        'ideia': 'url(/images/ideia.png)',
        'qualify': 'url(/images/qualify.png)',
        'security': 'url(/images/security.png)',
        'speed': 'url(/images/speed.png)',
        //projects
        'gpthelper': 'url(/images/gpthelper.png)',
      },
    },
  },
  plugins: [],
}
export default config
