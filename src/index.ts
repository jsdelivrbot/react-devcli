import 'babel-polyfill';
import {Action, Argv, Command, Component, Help, Reducer, Selector, Serve, Test} from './commands';
import cli from './config/cli';
import {
    ActionsConfig,
    CommandsConfig,
    ComponentsConfig,
    ReducersConfig,
    SelectorsConfig,
    ServeConfig,
    TestsConfig
} from 'react-devcli';

(async (): Promise<void> => {
    const config = await cli();

    switch (Argv._[0]) {
        case Component.name:
            Component.run(Argv, config.components as ComponentsConfig);
            break;
        case Reducer.name:
            Reducer.run(Argv, config.reducers as ReducersConfig);
            break;
        case Selector.name:
            Selector.run(Argv, config.selectors as SelectorsConfig);
            break;
        case Action.name:
            Action.run(Argv, config.actions as ActionsConfig);
            break;
        case Test.name:
            Test.run(Argv, config.tests as TestsConfig);
            break;
        case Command.name:
            Command.run(Argv, config.commands as CommandsConfig);
            break;
        case Serve.name:
            Serve.run(Argv, config.serve as ServeConfig);
            break;
        default:
            console.log('None');
            Help.run(Argv);
    }
})();
