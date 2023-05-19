module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // General ESLint rules
        'no-console': 'warn', // Warn against using console.log() and console.error()
        'no-unused-vars': 'warn', // Warn against unused variables
        'curly': 'warn',
        'eqeqeq': 'error',
        'indent': ['error', 2],
        'semi': 'error',
        'quotes': ['error', 'single'],
        'no-var': "error",
        'prefer-const': 'error',
        'no-debugger': 'warn',

        // React-specific rules
        'react/jsx-uses-react': 'error', // No longer necessary starting from React 17
        'react/react-in-jsx-scope': 'off', // No longer necessary starting from React 17
        'react/jsx-uses-vars': 'warn', // Warn against unused variables in JSX
        'react/prop-types': 'off', // Disable prop-types as we can use TypeScript or PropTypes library instead
    },
};