import yargs from 'yargs';
import InitCommand from './Init';
import NewCommand from './New';
import RouterCommand from './Router';
import ComponentCommand from './Component';
import StoreCommand from './Store';
import ReducerCommand from './Reducer';
import SelectorCommand from './Selector';
import ActionCommand from './Action';
import ContextCommand from './Context';
import CommandCommand from './Command';
import DocumentCommand from './Document';
import LintCommand from './Lint';
import TestCommand from './Test';
import ServeCommand from './Serve';
import HelpCommand from './Help';

export const Argv = yargs
    .command(InitCommand.name, InitCommand.description, InitCommand.options)
    .command(NewCommand.name, NewCommand.description, NewCommand.options)
    .command(RouterCommand.name, RouterCommand.description, RouterCommand.options)
    .command(ComponentCommand.name, ComponentCommand.description, ComponentCommand.options)
    .command(StoreCommand.name, StoreCommand.description, StoreCommand.options)
    .command(ReducerCommand.name, ReducerCommand.description, ReducerCommand.options)
    .command(SelectorCommand.name, SelectorCommand.description, SelectorCommand.options)
    .command(ActionCommand.name, ActionCommand.description, ActionCommand.options)
    .command(ContextCommand.name, ContextCommand.description, ContextCommand.options)
    .command(CommandCommand.name, CommandCommand.description, CommandCommand.options)
    .command(DocumentCommand.name, DocumentCommand.description, DocumentCommand.options)
    .command(LintCommand.name, LintCommand.description, LintCommand.options)
    .command(TestCommand.name, TestCommand.description, TestCommand.options)
    .command(ServeCommand.name, ServeCommand.description, ServeCommand.options)
    .command(HelpCommand.name, HelpCommand.description, HelpCommand.options)
    .help()
    .argv;

export const Init = InitCommand;
export const New = NewCommand;
export const Router = RouterCommand;
export const Component = ComponentCommand;
export const Store = StoreCommand;
export const Reducer = ReducerCommand;
export const Selector = SelectorCommand;
export const Action = ActionCommand;
export const Context = ContextCommand;
export const Command = CommandCommand;
export const Document = DocumentCommand;
export const Lint = LintCommand;
export const Test = TestCommand;
export const Serve = ServeCommand;
export const Help = HelpCommand;
