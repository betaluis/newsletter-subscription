/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                "md": "825px",
            }
        },
        screens: {
            "xs": "450px",
            ...defaultTheme.screens,
        }
    },
    plugins: [],
}
