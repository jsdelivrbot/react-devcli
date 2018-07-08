import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {IMakeable, IRemovable, ITestable} from '../Commands';
import {ContextConfig} from 'react-devcli';

class Context extends ACommand implements IRemovable, ITestable, IMakeable {
    public constructor() {
        const name = 'context';
        const description = 'context description';
        const options = {
        };

        super(name, description, options);
    }

    public run(argv: Arguments, config: ContextConfig): void {
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

export default Context;
