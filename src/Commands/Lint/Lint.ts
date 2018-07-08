import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {EnginesConfig} from 'react-devcli';

class Lint extends ACommand {
    public constructor() {
        const name = 'lint';
        const description = 'lint description';
        const options = {};

        super(name, description, options);
    }

    public run(argv: Arguments, config: EnginesConfig): void {
        console.log(config);
        console.log(argv);
    }

    public help(argv: Arguments): void {
        console.log(argv);
    }
}

export default Lint;
