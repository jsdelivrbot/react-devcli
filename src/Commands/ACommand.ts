import {Arguments} from 'yargs';
import {IOptions} from './Commands';
import {ConfigUnion} from 'react-devcli';

abstract class ACommand {
    public name: string;

    public description: string;

    public options: IOptions;

    public constructor(name: string, description: string, options: IOptions) {
        this.name = name;
        this.description = description;
        this.options = options;
    }

    public abstract run(argv: Arguments, config: ConfigUnion): void;

    public abstract help(argv: Arguments): void;
}

export default ACommand;
