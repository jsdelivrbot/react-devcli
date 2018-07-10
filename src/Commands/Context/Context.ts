import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {ILintable, IMakeable, IRemovable, ITestable} from '../CommandContracts';
import {ContextConfig} from 'react-devcli';
import {Command} from '../CommandDecorator';
import {description, flags, name} from './ContextOptions';

@Command(name, description, flags)
class Context extends ACommand implements IRemovable, ITestable, IMakeable, ILintable {
    public run(argv: Arguments, config: ContextConfig): void {
        console.log(argv);
        console.log(config);
    }

    public help(argv: Arguments): void {
        console.log(argv);
    }

    public remove(argv: Arguments): void {
        console.log(argv);
    }

    public test(argv: Arguments): void {
        console.log(argv);
    }

    public make(argv: Arguments): void {
        console.log(argv);
    }

    public lint(argv: Arguments): void {
        console.log(argv);
    }
}

export default Context;
