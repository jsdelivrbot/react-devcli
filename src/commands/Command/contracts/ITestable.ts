import {Arguments} from 'yargs';

export interface ITestable {
    test(argv: Arguments): void;
}
