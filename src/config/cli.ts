import find from 'find';
import chalk from 'chalk';

export const defaultConfiguration = () => ({
    components: {
        path: `${process.cwd()}/components`,
        propTypes: true,
        scssFile: true,
        index: false,
        exportFromIndex: false
    },
    reducers: {
        path: `${process.cwd()}/reducers`,
        componentBased: false
    },
    actions: {
        path: `${process.cwd()}/actions`,
        componentBased: false,
        index: false,
        separateActionTypes: false
    },
    selectors: {
        path: `${process.cwd()}/selectors`,
        componentBased: false
    },
    tests: {
        path: `${process.cwd()}/__tests__`,
        componentBased: false
    },
    commands: {
        path: `${process.cwd()}/react-devcli/commands`
    },
    templates: {
        path: `${process.cwd()}/react-devcli/templates`
    },
    engines: {
        language: 'js',
        testing: 'jest'
    }
});

// const defaultConfigurationConstraints = {
//     components: {
//         required: false,
//         path: {
//             required: false
//         },
//         propTypes: {
//             required: false
//         },
//         scssFile: {
//             required: false
//         },
//         index: {
//             required: false
//         },
//         exportFromIndex: {
//             required: false
//         }
//     },
//     reducers: {
//         required: false,
//         path: {
//             required: false
//         },
//         componentBased: {
//             required: false
//         }
//     },
//     actions: {
//         required: false,
//         path: {
//             required: false
//         },
//         componentBased: {
//             required: false
//         },
//         index: {
//             required: false
//         },
//         separateActionTypes: {
//             required: false
//         }
//     },
//     selectors: {
//         required: false,
//         path: {
//             required: false
//         },
//         componentBased: {
//             required: false
//         }
//     },
//     tests: {
//         required: false,
//         path: {
//             required: false
//         },
//         componentBased: {
//             required: false
//         }
//     },
//     commands: {
//         required: false,
//         path: {
//             required: false
//         }
//     },
//     templates: {
//         required: false,
//         path: {
//             required: true
//         }
//     },
//     engines: {
//         required: false,
//         language: {
//             required: false,
//             values: ['js', 'ts']
//         },
//         testing: {
//             required: false,
//             values: ['jest', 'mocha', 'jasmine']
//         }
//     }
// };

// Todo: Add configuration metadata: like required, enumerable...

export const load = () => {
    return new Promise((resolve, reject) => {
        find.file(/react\.config\.js$/, process.cwd(), (files) => {
            if (files.length) {
                const path = files[files.length - 1];
                resolve(require(path)());
            } else {
                resolve(defaultConfiguration());
            }

            reject('Could not load configuration file')
        });
    });
    // Todo: Load configuration
    // Todo: Add configuration merge possibility
    // Todo: Add memoization
};

export const merge = (inputConfig: Configuration): Configuration => {
    const defaultConfig = defaultConfiguration();
    let finalConfig = {};

    (function recurse(defaultConfigI: Configuration, inputConfigI: Configuration, finalConfigI: Configuration) {
        if (typeof defaultConfigI === 'object') {
            // Need to walk object or array
            for (let k of Object.keys(defaultConfigI)) {
                // Array
                if (typeof defaultConfigI[k] === 'object' && Array.isArray(defaultConfigI[k])) {
                    finalConfigI[k] = defaultConfigI[k].concat(inputConfigI[k] || []);
                    // Todo: Remove doubles from array (primitive values or array)
                    // console.log(finalConfigI[k]);
                }

                // Object
                if (typeof defaultConfigI[k] === 'object' && !Array.isArray(defaultConfigI[k])) {
                    // Compare individual values between defaultConfig and inputConfig
                    let currentConfig = {};
                    for (let dKey of Object.keys(defaultConfigI[k])) {
                        const defaultVal = defaultConfigI[k][dKey];
                        const inputVal = inputConfigI[k] ? inputConfigI[k][dKey] : undefined;
                        currentConfig[dKey] = inputVal ? inputVal : defaultVal;
                    }

                    finalConfigI[k] = currentConfig;
                    recurse(defaultConfigI[k], inputConfigI[k], finalConfigI);
                }
            }
        }
    })(defaultConfig as Configuration, inputConfig as Configuration, finalConfig as Configuration);

    return finalConfig;
};

export const validate = (config: Configuration) => {
    // Todo: Add enum checks like for engines

    (function recurse(configuration: Configuration, defaultConfig: any = defaultConfiguration()) {
        if (typeof configuration === 'object') {
            // Need to walk object or array
            for (let key of Object.keys(configuration)) {
                // Check if given configuration key matches one of the default configuration keys
                if (Object.keys(defaultConfig).indexOf(key) < 0) {
                    throw new Error(
                        `Invalid configuration key: "${chalk.red.bold(key)}" for the default object: \n` +
                        `${chalk.blue(JSON.stringify(defaultConfig, undefined, 2))}`
                    );
                }
                else {
                    // Invalid type for correct key
                    if (typeof configuration[key] !== typeof defaultConfig[key]) {
                        throw new Error(
                            `Invalid type ${chalk.red.bold(typeof configuration[key])}` +
                            ` for key "${chalk.red.bold(key)}" with default value \n` +
                            `${chalk.blue(JSON.stringify(defaultConfig[key], undefined, 2))}`
                        );
                    }

                    // Array
                    if (typeof configuration[key] === 'object' && Array.isArray(configuration[key])) {
                        configuration[key].forEach((item: any, i: number) => {
                            recurse(item, defaultConfig[key][i]);
                        });
                    }

                    // Object
                    if (typeof configuration[key] === 'object' && !Array.isArray(configuration[key])) {
                        recurse(configuration[key], defaultConfig[key]);
                    }
                }
            }
        }
    })(config);
};

export default load;
