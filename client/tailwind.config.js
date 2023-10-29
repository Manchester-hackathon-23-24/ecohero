/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "dropdownScale": {
                    "0%": { transform: "scale(0)" },
                    "100%": { transform: "scale(1)" }
                },
            },
            animation: {
                dropdown: "dropdownScale 0.3s"
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["forest"]
    }
};

