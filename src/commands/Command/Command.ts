import {Arguments} from 'yargs';
import ACommand from './ACommand';
import {IMakeable} from './contracts/IMakeable';
import {IRemovable} from './contracts/IRemovable';

class Command extends ACommand implements IRemovable, IMakeable {
    constructor() {
        const name = 'command';
        const description = 'Command description';
        const options = {
        };

        super(name, description, options);
    }

    public run(argv: Arguments): void {
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
