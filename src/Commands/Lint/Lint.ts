import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {EnginesConfig} from 'react-devcli';
import {Command} from '../CommandDecorator';
import {description, name, flags} from './LintOptions';

@Command(name, description, flags)
class Lint extends ACommand {
    public run(argv: Arguments, config: EnginesConfig): void {
        console.log(config);
        console.log(argv);
    }

    public help(argv: Arguments): void {
        console.log(argv);
    }
}

export default Lint;
