import {Arguments} from 'yargs';
import ACommand from '../ACommand';

class Help extends ACommand {
    public constructor() {
        const name = 'help';
        const description = 'Help description';
        const options = {
        };

        super(name, description, options);
    }

    public run(argv: Arguments): void {
        console.log('Help options:');
        console.log(argv);
    }

    public help(argv: Arguments): void {
        console.log(argv);
    }
}

export default Help;