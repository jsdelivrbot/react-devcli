import {Arguments} from 'yargs';
import ACommand from '../Command/ACommand';
import {ServeConfig} from 'react-devcli';

class Serve extends ACommand {
    constructor() {
        const name = 'server';
        const description = 'Serve description';
        const options = {
        };

        super(name, description, options);
    }

    public run(argv: Arguments, config: ServeConfig): void {
        console.log(config);
        console.log(argv);
    }

    public help(argv: Arguments): void {
        console.log(argv);
    }
}

export default new Serve();
