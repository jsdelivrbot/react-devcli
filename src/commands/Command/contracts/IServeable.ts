import {Arguments} from 'yargs';

export interface IServable {
    serve(argv: Arguments): void;
}
