import {Arguments} from 'yargs';
import {IFlags} from './CommandContracts';
import {ConfigUnion} from 'react-devcli';

abstract class ACommand {
    public name!: string;

    public description!: string;

    public flags!: IFlags;

    public abstract run(argv: Arguments, config: ConfigUnion): void;

    public abstract help(argv: Arguments): void;
}

export default ACommand;
