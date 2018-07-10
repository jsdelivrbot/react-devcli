import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {DocumentationConfig} from 'react-devcli';
import {IMakeable, IRemovable} from '../CommandContracts';
import {Command} from '../CommandDecorator';
import {name, description, flags} from './DocsOptions';

@Command(name, description, flags)
class Docs extends ACommand implements IRemovable, IMakeable {
    public run(argv: Arguments, config: DocumentationConfig): void {
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

export default Docs;
