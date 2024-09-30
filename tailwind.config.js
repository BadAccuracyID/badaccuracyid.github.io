/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    safelist: [
        "bg-black",
        "text-black",
        "ring-black",
        {
            pattern: /shadow-(amber|green|blue|cyan|red|emerald|purple|white|yellow)-(100|200|300|400|500|600|700|800|900)/,
        },
        {
            pattern: /shadow-(xl|2xl|sm|lg)/,
        },
        {
            pattern: /bg-(amber|green|blue|cyan|red|emerald|purple|yellow)-(100|200|300|400|500|600|700|800|900)/,
        },
        {
            pattern: /text-(amber|green|blue|cyan|red|emerald|purple|yellow)-(100|200|300|400|500|600|700|800|900)/,
        },
        {
            pattern: /ring-(amber|green|blue|cyan|red|emerald|purple|yellow)-(100|200|300|400|500|600|700|800|900)/,
        },
    ],
    plugins: [require('flowbite/plugin')],
}

