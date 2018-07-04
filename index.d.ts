declare type ConfigurationLanguage = 'js' | 'ts';
declare type ConfigurationTesting = 'jest' | 'mocha' | 'jasmine';

declare interface Configuration {
    components?: {
        path: string,
        propTypes: boolean,
        scssFile: boolean,
        index: boolean,
        exportFromIndex: boolean
    },
    reducers?: {
        path: string,
        componentBased: boolean
    },
    actions?: {
        path: string,
        componentBased: boolean,
        index: boolean,
        separateActionTypes: boolean
    },
    selectors?: {
        path: string,
        componentBased: boolean
    },
    tests?: {
        path: string,
        componentBased: boolean
    },
    commands?: {
        path: string
    },
    templates?: {
        path: string
    },
    engines?: {
        language: ConfigurationLanguage,
        testing: ConfigurationTesting
    }
}
