import {Action, Argv, Command, Component, Help, Reducer, Selector, Serve, Test} from './commands';

switch (Argv._[0]) {
    case Component.name:
        console.log('Component');
        Component.run(Argv);
        break;
    case Reducer.name:
        console.log('Reducer');
        Reducer.run(Argv);
        break;
    case Selector.name:
        console.log('Selector');
        Selector.run(Argv);
        break;
    case Action.name:
        console.log('Action');
        Action.run(Argv);
        break;
    case Test.name:
        console.log('Test');
        Test.run(Argv);
        break;
    case Command.name:
        console.log('Command');
        Command.run(Argv);
        break;
    case Serve.name:
        console.log('Server');
        Serve.run(Argv);
        break;
    default:
        console.log('None');
        Help.run(Argv);
}
