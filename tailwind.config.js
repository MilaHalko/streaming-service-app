/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
        extend: {
            height: {
                header: '560px',
                rate: '400px',
            },
            fontSize: {
                h1: '2.6rem',
            },
            screens: {
                xs: '475px',
            },
            colors: {
                main: '#080A1A',
                subMain: '#F20000',
                dry: '#0B0F29',
                star: '#FFB000',
                text: '#cococo',
                border: '#4b5563',
                dryGray: '#EOD5D5',
            },
        },
    },
    plugins: [],
}

