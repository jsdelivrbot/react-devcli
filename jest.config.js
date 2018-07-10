module.exports = {
    roots: [
        '<rootDir>/src'
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/src/.*(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json'
    ],
    coverageDirectory: './coverage',
    // coverageThreshold: {
    //     global: {
    //         branches: 80,
    //         functions: 80,
    //         lines: 80,
    //         statements: -10
    //     }
    // },
    notify: true
};
