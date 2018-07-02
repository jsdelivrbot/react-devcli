import yargs from 'yargs';
import ActionCommand from './Action';
import CommandCommand from './Command';
import ComponentCommand from './Component';
import HelpCommand from './Help';
import ReducerCommand from './Reducer';
import SelectorCommand from './Selector';
import ServeCommand from './Serve';
import TestCommand from './Test';

export const Argv = yargs
    .command(ComponentCommand.name, ComponentCommand.description, ComponentCommand.options)
    .command(ReducerCommand.name, ReducerCommand.description, ReducerCommand.options)
    .command(SelectorCommand.name, SelectorCommand.description, SelectorCommand.options)
    .command(ActionCommand.name, ActionCommand.description, ActionCommand.options)
    .command(TestCommand.name, TestCommand.description, TestCommand.options)
    .command(CommandCommand.name, CommandCommand.description, CommandCommand.options)
    .command(ServeCommand.name, ServeCommand.description, ServeCommand.options)
    .command(HelpCommand.name, HelpCommand.description, HelpCommand.options)
    .help()
    .argv;

export const Component = ComponentCommand;
export const Reducer = ReducerCommand;
export const Selector = SelectorCommand;
export const Action = ActionCommand;
export const Test = TestCommand;
export const Command = CommandCommand;
export const Serve = ServeCommand;
export const Help = HelpCommand;
