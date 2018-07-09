import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {IMakeable, IRemovable, ITestable} from '../Commands';
import {ReducersConfig} from 'react-devcli';

class Reducer extends ACommand implements IRemovable, ITestable, IMakeable {
    public constructor() {
        const name = 'reducer';
        const description = 'Reducer description';
        const options = {
        };

        super(name, description, options);
    }

    public run(argv: Arguments, config: ReducersConfig): void {
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

export default Reducer;