import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {CommandsConfig} from 'react-devcli';
import {ILintable, IMakeable, IRemovable} from '../CommandContracts';
import {Command} from '../CommandDecorator';
import {description, flags, name} from './RouterOptions';

@Command(name, description, flags)
class Router extends ACommand implements IRemovable, IMakeable, ILintable {
    public run(argv: Arguments, config: CommandsConfig): void {
        console.log(config);
        console.log(argv);
    }

    public help(argv: Arguments): void {
        console.log(argv);
    }

    public remove(argv: Arguments): void {
        console.log(argv);
    }

    public make(argv: Arguments): void {
        console.log(argv);
    }

    public lint(argv: Arguments): void {
        console.log(argv);
    }
}

export default Router;
