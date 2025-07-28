import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F9F9EB',
        accent: '#F59E0B',
        card: '#FFFFFF',
        border: '#000000',
        text: {
          primary: '#000000',
          secondary: '#4B5563',
        },
      },
      borderRadius: {
        md: '0.5rem',
      },
      fontSize: {
        // aumenta levemente o tamanho padrão
        sm: '1rem',       // 16px
        base: '1.125rem', // 18px
        lg: '1.25rem',    // 20px
        xl: '1.5rem',     // 24px
      },
      spacing: {
        // melhora espaçamento para telas maiores
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      },
      maxWidth: {
        // limita a largura central de forma confortável
        screen: '100vw',
        content: '48rem', // 768px
      },
    },
  },
  plugins: [],
};

export default config;
