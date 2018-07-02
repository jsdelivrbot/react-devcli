#!/usr/bin/env node

const chalk = require('chalk');
const {argv, component, reducer, selector, action, test, command, serve, help} = require('./commands');

const command = argv._[0];
switch (command) {
    case 'component':
        component.run(argv);
        break;
    case 'reducer':
        reducer.run(argv);
        break;
    case 'selector':
        selector.run(argv);
        break;
    case 'action':
        action.run(argv);
        break;
    case 'test':
        test.run(argv);
        break;
    case 'command':
        command.run(argv);
        break;
    case 'serve':
        serve.run(argv);
        break;
    default:
        help.run(argv);
}
