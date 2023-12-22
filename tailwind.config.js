/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
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
                lg: '1000px',
            },
            colors: {
                main: '#080A1A',
                subMain: '#ff0000',
                dry: '#0b1133',
                star: "#FFB000",
                text: "#c0c0c0",
                border: '#243970',
                dryGray: '#E0D5D5',
            },
        },
        plugins: [require('@tailwindcss/line-clamp')],
    }
}