import 'babel-polyfill';
import cli from './config/cli';
import {
    Action,
    Argv,
    Command,
    Component,
    Document,
    Help,
    Reducer,
    Selector,
    Serve,
    Test,
    Init,
    New,
    Router,
    Store,
    Lint
} from './commands';
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
        case Init.name:
            Init.run(Argv, config.components as ComponentsConfig);
            break;
        case New.name:
            New.run(Argv, config.components as ComponentsConfig);
            break;
        case Router.name:
            Router.run(Argv, config.components as ComponentsConfig);
            break;
        case Component.name:
            Component.run(Argv, config.components as ComponentsConfig);
            break;
        case Store.name:
            Store.run(Argv, config.reducers as ReducersConfig);
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
        case Command.name:
            Command.run(Argv, config.commands as CommandsConfig);
            break;
        case Document.name:
            Document.run(Argv, config.tests as TestsConfig);
            break;
        case Lint.name:
            Lint.run(Argv, config.tests as TestsConfig);
            break;
        case Test.name:
            Test.run(Argv, config.tests as TestsConfig);
            break;
        case Serve.name:
            Serve.run(Argv, config.serve as ServeConfig);
            break;
        default:
            console.log('None');
            Help.run(Argv);
    }
})();
