#!/usr/bin/env node

const chalk = require('chalk');
const yargs = require('yargs');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
const command = argv._[0];
const subCommand = argv._[1];

switch (command) {
    case 'component':
        console.log('listing');
        console.log(argv);
        break;
    case 'reducer':
        console.log('reading');
        console.log(argv);
        break;
    case 'selector':
        console.log('reading');
        console.log(argv);
        break;
    case 'action':
        console.log('adding');
        console.log(argv);
        break;
    case 'test':
        console.log('removing');
        console.log(argv);
        break;
    case 'command':
        console.log('removing');
        console.log(argv);
        break;
    case 'serve':
        console.log('removing');
        console.log(argv);
        break;
    default:
        console.log('Command not found');
        console.log(argv);
}
