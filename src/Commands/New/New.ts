import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {CommandsConfig} from 'react-devcli';
import {Command} from '../CommandDecorator';
import {description, flags, name} from './NewOptions';

@Command(name, description, flags)
class New extends ACommand {
    public run(argv: Arguments, config: CommandsConfig): void {
        console.log(config);
        console.log(argv);
    }

    public help(argv: Arguments): void {
        console.log(argv);
    }
}

export default New;
