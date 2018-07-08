import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {DocumentationConfig} from 'react-devcli';
import {IMakeable, IRemovable} from '../Commands';

class Document extends ACommand implements IRemovable, IMakeable {
    public constructor() {
        const name = 'document';
        const description = 'document description';
        const options = {};

        super(name, description, options);
    }

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

export default Document;
