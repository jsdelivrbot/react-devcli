const yargs = require('yargs');
const command = require('./command');
const component = require('./component');
const reducer = require('./reducer');
const action = require('./action');
const selector = require('./selector');
const serve = require('./serve');
const test = require('./test');
const help = require('./help');

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

module.exports = {
    argv,
    command,
    component,
    reducer,
    action,
    selector,
    serve,
    test,
    help
};
