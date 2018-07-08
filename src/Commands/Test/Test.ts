import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {IMakeable, IRemovable} from '../Commands';
import {TestsConfig} from 'react-devcli';

class Test extends ACommand implements IRemovable, IMakeable {
    public constructor() {
        const name = 'test';
        const description = 'Test description';
        const options = {
        };

        super(name, description, options);
    }

    public run(argv: Arguments, config: TestsConfig): void {
        console.log(argv);
        console.log(config);
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

export default Test;
