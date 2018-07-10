import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {Command} from '../CommandDecorator';
import {description, flags, name} from './HelpOptions';

@Command(name, description, flags)
class Help extends ACommand {
    public run(argv: Arguments): void {
        console.log('Help options:');
        console.log(argv);
    }

    public help(argv: Arguments): void {
        console.log(argv);
    }
}

export default Help;
