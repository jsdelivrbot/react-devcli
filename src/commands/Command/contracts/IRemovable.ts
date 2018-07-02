import {Arguments} from 'yargs';

export interface IRemovable {
    remove(argv: Arguments): void;
}
