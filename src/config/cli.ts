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

export const load = () => {
    // Todo: Load configuration
    // Todo: Add configuration merge possibility
    // Todo: Add memoization
};

export const validate = (config: Configuration) => {
    // Todo: Add enum checks like for engines

    (function recurse(configuration: Configuration, defaultConfig: any = defaultConfiguration()) {
        if (typeof configuration === 'object') {
            // Need to walk object
            for (let key of Object.keys(configuration)) {
                // Check if given configuration key matches one default configuration keys
                if (Object.keys(defaultConfig).indexOf(key) < 0) {
                    throw new Error(
                        `Invalid configuration key: "${chalk.red.bold(key)}" for the default object: \n${chalk.blue(JSON.stringify(defaultConfig, undefined, 2))}`
                    );
                }
                else {
                    // Invalid type for correct key
                    if (typeof configuration[key] !== typeof defaultConfig[key]) {
                        throw new Error(
                            `Invalid type ${chalk.red.bold(typeof configuration[key])} for key "${chalk.red.bold(key)}" for the default object \n${chalk.blue(JSON.stringify(defaultConfig, undefined, 2))}`
                        );
                    }

                    // Array
                    if (typeof configuration[key] === 'object' && Array.isArray(configuration[key])) {
                        configuration[key].forEach((k: any) => {
                            recurse(k, k);
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

export default () => {
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
};
