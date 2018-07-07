import {Arguments} from 'yargs';
import ACommand from './ACommand';
import {IMakeable, IRemovable} from './contracts/ISubCommands';
import {CommandsConfig} from 'react-devcli';

class Command extends ACommand implements IRemovable, IMakeable {
    public constructor() {
        const name = 'command';
        const description = 'Command description';
        const options = {
        };

        super(name, description, options);
    }

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
}

export default new Command();
