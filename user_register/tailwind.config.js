module.exports = {
    purge:{
        content:[
            './app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
        ],
        safelist:[  //do not delete these classes
            /^bg-/,
            /^to-/,
            /^from-/,
        ]
    },
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}