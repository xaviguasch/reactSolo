module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        ecmaVersion: 6,
        sourceType: "module",
    },
    plugins: [
        "react/recommended",
    ],
    rules: {
        indent: [
            "error",
            4,
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "varsIgnorePattern": "^h$",
        "linebreak-style": [
            "error",
            "unix",
        ],
        quotes: [
            "error",
            "single",
        ],
        semi: [
            "error",
            "always",
        ],
    },
};
