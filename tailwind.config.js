/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                g0: 'var(--g0)',
                g10: 'var(--g10)',
                g20: 'var(--g20)',
                g30: 'var(--g30)',
                g40: 'var(--g40)',
                g50: 'var(--g50)',
                g60: 'var(--g60)',
                g70: 'var(--g70)',
                g80: 'var(--g80)',
                g90: 'var(--g90)',
                g100: 'var(--g100)',
                g200: 'var(--g200)',
                g300: 'var(--g300)',
                g400: 'var(--g400)',
                g500: 'var(--g500)',
                g600: 'var(--g600)',
                g700: 'var(--g700)',
                g800: 'var(--g800)',
                g900: 'var(--g900)',
            },
            fontFamily: {
                dmserif: ['"DM Serif Display"', 'serif'],
            },
            fontSize: {
                'display-xxl': '240px',
                'display-m': '78px',
                'display-s': '64px',
                'display-xs': '52px',

                'heading-s': '24px',
                'heading-xs': '20px',

                'body-m': '16px',
            },
        },
    },
    plugins: [],
};
