import {Arguments} from 'yargs';

export interface IMakeable {
    make(argv: Arguments): void;
}
