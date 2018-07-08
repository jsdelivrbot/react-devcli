import {IConfigurationFile} from 'tslint/lib/configuration';
import {CLIEngine} from 'eslint';
import ProjectConfig = jest.ProjectConfig;
import MochaOptions = Mocha.MochaOptions;
import {CommandsConfig, EnginesConfig, TemplatesConfig} from 'react-devcli';

declare module 'react-devcli' {

    export interface ComponentsConfig {
        path: string;
        propTypes: boolean;
        scssFile: boolean;
        index: boolean;
        exportFromIndex: boolean;
    }

    export interface ReducersConfig {
        path: string;
        componentBased: boolean;
    }

    export interface ActionsConfig {
        path: string;
        componentBased: boolean;
        index: boolean;
        separateActionTypes: boolean;
    }

    export interface SelectorsConfig {
        path: string;
        componentBased: boolean;
    }

    export interface TestsConfig {
        path: string;
        componentBased: boolean;
    }

    export interface CommandsConfig {
        path: string;
    }

    export interface TemplatesConfig {
        path: string;
    }

    export interface EnginesConfig {
        language?: 'js' | 'ts';
        testing?: {
            jest?: ProjectConfig | string;
            mocha?: MochaOptions | string;
            jasmine?: Object | string;
        };
        linting?: {
            eslint?: CLIEngine.Options | string;
            tslint?: IConfigurationFile | string;
        };
    }

    export interface ServeConfig {
        port: number;
        // other browser specific configs
        // integrate with webpack
    }

    export interface ConfigUnion extends ComponentsConfig,
        ReducersConfig,
        ActionsConfig,
        SelectorsConfig,
        TestsConfig,
        CommandsConfig,
        TemplatesConfig,
        EnginesConfig,
        ServeConfig {
    }

    export interface Configuration {
        components?: ComponentsConfig;
        reducers?: ReducersConfig;
        actions?: ActionsConfig;
        selectors?: SelectorsConfig;
        tests?: TestsConfig;
        commands?: CommandsConfig;
        templates?: TemplatesConfig;
        engines?: EnginesConfig;
        serve?: ServeConfig;
    }
    
    // Todo: Add API for class which will be exported in lib
}
