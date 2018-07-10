import 'babel-polyfill';
import CLI from './Config/CLI';
import {
    Action,
    Argv,
    CustomCommand,
    Component,
    Context,
    Docs,
    Help,
    Init,
    Lint,
    New,
    Reducer,
    Router,
    Selector,
    Store,
    Test
} from './Commands';
import {
    ActionsConfig,
    CommandsConfig,
    ComponentsConfig,
    ContextConfig,
    DocumentationConfig,
    EnginesConfig,
    ReducersConfig,
    RouterConfig,
    SelectorsConfig,
    StoreConfig,
    TestsConfig
} from 'react-devcli';

(async (): Promise<void> => {
    const config = await CLI();

    switch (Argv._[0]) {
        case Init.name:
            // Todo: Add init config
            Init.run(Argv, config.components as ComponentsConfig);
            break;
        case New.name:
            // Todo: Add new config
            New.run(Argv, config.components as ComponentsConfig);
            break;
        case Router.name:
            Router.run(Argv, config.components as RouterConfig);
            break;
        case Component.name:
            Component.run(Argv, config.components as ComponentsConfig);
            break;
        case Store.name:
            Store.run(Argv, config.reducers as StoreConfig);
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
        case Context.name:
            Context.run(Argv, config.actions as ContextConfig);
            break;
        case CustomCommand.name:
            CustomCommand.run(Argv, config.commands as CommandsConfig);
            break;
        case Docs.name:
            Docs.run(Argv, config.tests as DocumentationConfig);
            break;
        case Lint.name:
            Lint.run(Argv, config.tests as EnginesConfig);
            break;
        case Test.name:
            Test.run(Argv, config.tests as TestsConfig);
            break;
        default:
            console.log('None');
            Help.run(Argv);
    }
})();
