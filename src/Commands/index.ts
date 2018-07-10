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
import DocsCommand from './Docs';
import LintCommand from './Lint';
import TestCommand from './Test';
import HelpCommand from './Help';

export const Argv = yargs
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
export const Docs = DocsCommand;
export const Lint = LintCommand;
export const Test = TestCommand;
export const Help = HelpCommand;
