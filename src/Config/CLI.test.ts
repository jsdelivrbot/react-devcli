import path from 'path';
import {defaultConfiguration, validate, merge, default as CLI} from './CLI';
import DoneCallback = jest.DoneCallback;
import {Configuration} from 'react-devcli';
import expect from 'expect';

describe('CLI config test suite', (): void => {
    test('should read correct configuration file', async (done: DoneCallback): Promise<void> => {
        process.chdir(path.resolve(__dirname, '..', '..', '__fixtures__', 'config', 'CLI'));

        const configuration = await CLI();
        expect(configuration).toEqual(defaultConfiguration());
        done();
    });

    test(
        'should fall back to default configuration if no configuration is provided',
        async (done: DoneCallback): Promise<void> => {
            process.chdir(path.resolve(__dirname, '..', '..', '__fixtures__', 'config', 'CLI', 'no-config'));

            const configuration = await CLI();
            expect(configuration).toEqual(defaultConfiguration());
            done();
        }
    );

    test(
        'should make sure configuration file matches the API schema',
        async (done: DoneCallback): Promise<void> => {
            process.chdir(path.resolve(__dirname, '..', '..', '__fixtures__', 'config', 'CLI', 'dir1'));

            const configuration = (await CLI() as Configuration);
            const expectedConfiguration = {
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
                    testing: {},
                    linting: {}
                }
            };
            expect(configuration).toMatchObject(expectedConfiguration);
            expect(configuration.engines!.language).toMatch(/js|ts/);
            done();
        }
    );

    test('should validate configuration against API schema', (): void => {
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

        expect((): void => {
            validate(validConfiguration as Configuration);
        }).not.toThrow();
        expect((): void => {
            validate(invalidConfiguration as Configuration);
        }).toThrow();
    });

    test('should merge provided configuration with default configuration', (): void => {
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
                testing: {},
                linting: {}
            }
        };

        expect(merge(inputConfiguration as Configuration)).toEqual(finalConfiguration as Configuration);
    });
});
