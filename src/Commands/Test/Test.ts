import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {IMakeable, IRemovable} from '../CommandContracts';
import {TestsConfig} from 'react-devcli';
import {Command} from '../CommandDecorator';
import {description, flags, name} from './TestOptions';

@Command(name, description, flags)
class Test extends ACommand implements IRemovable, IMakeable {
    public run(argv: Arguments, config: TestsConfig): void {
        console.log(argv);
        console.log(config);
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
}

export default Test;
