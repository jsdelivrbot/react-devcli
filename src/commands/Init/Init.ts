import {Arguments} from 'yargs';
import ACommand from '../Command/ACommand';
import {CommandsConfig} from 'react-devcli';

class Init extends ACommand {
    public constructor() {
        const name = 'init';
        const description = 'init description';
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

export default new Init();
