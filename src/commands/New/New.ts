import {Arguments} from 'yargs';
import ACommand from '../Command/ACommand';
import {CommandsConfig} from 'react-devcli';

class New extends ACommand {
    public constructor() {
        const name = 'new';
        const description = 'new description';
        const options = {};

        super(name, description, options);
    }

    public run(argv: Arguments, config: CommandsConfig): void {
        console.log(config);
        console.log(argv);
    }

    public help(argv: Arguments): void {
        console.log(argv);
    }
}

export default New;
