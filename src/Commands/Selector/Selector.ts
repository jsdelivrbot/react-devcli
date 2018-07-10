import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {IMakeable, IRemovable, ITestable} from '../Commands';
import {SelectorsConfig} from 'react-devcli';

class Selector extends ACommand implements IRemovable, ITestable, IMakeable {
    public constructor() {
        const name = 'selector';
        const description = 'Selector description';
        const options = {
        };

        super(name, description, options);
    }

    public run(argv: Arguments, config: SelectorsConfig): void {
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

export default Selector;
