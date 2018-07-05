import path from 'path';
import {defaultConfiguration, validate, merge, default as cli} from './cli';
import DoneCallback = jest.DoneCallback;

describe('CLI config test suite', () => {
    test('should read correct configuration file', async (done: DoneCallback) => {
        process.chdir(path.resolve(__dirname, '..', '..', '__fixtures__', 'config', 'cli'));

        const configuration = await cli();
        expect(configuration).toEqual(defaultConfiguration());
        done();
    });

    test('should fall back to default configuration if no configuration is provided', async (done: DoneCallback) => {
        process.chdir(path.resolve(__dirname, '..', '..', '__fixtures__', 'config', 'cli', 'no-config'));

        const configuration = await cli();
        expect(configuration).toEqual(defaultConfiguration());
        done();
    });

    test('should make sure configuration file matches the API schema', async (done: DoneCallback) => {
        process.chdir(path.resolve(__dirname, '..', '..', '__fixtures__', 'config', 'cli', 'dir1'));

        const configuration = (await cli() as Configuration);
        const expectedConfiguration: Configuration = {
            components: {
                path: expect.any(String),
                propTypes: expect.any(Boolean),
                scssFile: expect.any(Boolean),
                index: expect.any(Boolean),
                exportFromIndex: expect.any(Boolean)
            },
            reducers: {
                path: expect.any(String),
                componentBased: expect.any(Boolean)
            },
            actions: {
                path: expect.any(String),
                componentBased: expect.any(Boolean),
                index: expect.any(Boolean),
                separateActionTypes: expect.any(Boolean)
            },
            selectors: {
                path: expect.any(String),
                componentBased: expect.any(Boolean)
            },
            tests: {
                path: expect.any(String),
                componentBased: expect.any(Boolean)
            },
            commands: {
                path: expect.any(String)
            },
            templates: {
                path: expect.any(String)
            },
            engines: {
                language: expect.any(String),
                testing: expect.any(String)
            }
        };
        expect(configuration).toMatchObject(expectedConfiguration);
        expect(configuration.engines!.language).toMatch(/js|ts/);
        expect(configuration.engines!.testing).toMatch(/(^jest$)|(^mocha$)|(^jasmine$)/);
        done();
    });

    test('should validate configuration against API schema', () => {
        const validConfiguration = {
            selectors: {
                path: `${process.cwd()}/selectors`,
                componentBased: false
            },
            tests: {
                path: `${process.cwd()}/__tests__`,
                componentBased: false
            }
        };
        const invalidConfiguration = {
            engines: {
                language: 'js',
                testing: 'jest',
                y: 10
            },
            intruder: 'Got in',
            x: 20
        };

        expect(() => {validate(validConfiguration as Configuration); }).not.toThrow();
        expect(() => {validate(invalidConfiguration as Configuration); }).toThrow();
    });

    test('should merge provided configuration with default configuration', () => {
        const inputConfiguration = {
            components: {
                propTypes: true,
                scssFile: true,
                index: true
            },
            reducers: {
                componentBased: true
            },
            actions: {
                componentBased: true,
                separateActionTypes: true
            },
            selectors: {
                componentBased: true
            },
            tests: {
                componentBased: true
            },
            commands: {
                path: '/path/to/commands'
            },
            engines: {
                language: 'ts'
            }
        };
        const finalConfiguration = {
            components: {
                path: `${process.cwd()}/components`,
                propTypes: true,
                scssFile: true,
                index: true,
                exportFromIndex: false
            },
            reducers: {
                path: `${process.cwd()}/reducers`,
                componentBased: true
            },
            actions: {
                path: `${process.cwd()}/actions`,
                componentBased: true,
                index: false,
                separateActionTypes: true
            },
            selectors: {
                path: `${process.cwd()}/selectors`,
                componentBased: true
            },
            tests: {
                path: `${process.cwd()}/__tests__`,
                componentBased: true
            },
            commands: {
                path: '/path/to/commands'
            },
            templates: {
                path: `${process.cwd()}/react-devcli/templates`
            },
            engines: {
                language: 'ts',
                testing: 'jest'
            }
        };

        expect(merge(inputConfiguration as Configuration)).toEqual(finalConfiguration);
    });
});
