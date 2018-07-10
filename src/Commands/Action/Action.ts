import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {ActionsConfig} from 'react-devcli';
import {ILintable, IMakeable, IRemovable, ITestable} from '../CommandContracts';
import {Command} from '../CommandDecorator';
import {description, flags, name} from './ActionOptions';

@Command(name, description, flags)
class Action extends ACommand implements IRemovable, ITestable, IMakeable, ILintable {

    public run(argv: Arguments, config: ActionsConfig): void {
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

export default Action;
