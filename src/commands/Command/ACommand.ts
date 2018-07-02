import {Arguments} from 'yargs';
import {IOptions} from './contracts/IOptions';

abstract class ACommand {
    public name: string;

    public description: string;

    public options: IOptions;

    public constructor(name: string, description: string, options: IOptions) {
        this.name = name;
        this.description = description;
        this.options = options;
    }

    public abstract run(argv: Arguments): void;

    public abstract help(argv: Arguments): void;
}

export default ACommand;
