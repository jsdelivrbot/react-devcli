import {Arguments} from 'yargs';
import ACommand from '../Command/ACommand';
import {CommandsConfig} from 'react-devcli';
import {IRemovable} from '../Command/contracts/IRemovable';
import {IMakeable} from '../Command/contracts/IMakeable';

class Doc extends ACommand implements IRemovable, IMakeable {
    public constructor() {
        const name = 'doc';
        const description = 'doc description';
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

    public remove(argv: Arguments): void {
        console.log(argv);
    }

    public make(argv: Arguments): void {
        console.log(argv);
    }
}

export default new Doc();
