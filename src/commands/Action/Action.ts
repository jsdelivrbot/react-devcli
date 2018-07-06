import {Arguments} from 'yargs';
import ACommand from '../Command/ACommand';
import {IMakeable} from '../Command/contracts/IMakeable';
import {IRemovable} from '../Command/contracts/IRemovable';
import {ITestable} from '../Command/contracts/ITestable';
import {ActionsConfig} from 'react-devcli';

class Action extends ACommand implements IRemovable, ITestable, IMakeable {
    constructor() {
        const name = 'action';
        const description = 'Action description';
        const options = {
            component: {
                alias: 'c',
                demand: false,
                describe: 'Create component alongside action file',
            },
        };

        super(name, description, options);
    }

    public run(argv: Arguments, config: ActionsConfig): void {
        console.log(argv);
        console.log(config);
    }

    public help(argv: Arguments): void {
        console.log(argv);
    }

    public remove(argv: Arguments): void {
        console.log(argv);
    }

    public test(argv: Arguments): void {
        console.log(argv);
    }

    public make(argv: Arguments): void {
        console.log(argv);
    }
}

export default new Action();
