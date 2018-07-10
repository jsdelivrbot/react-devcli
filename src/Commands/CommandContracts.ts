import {Options} from 'yargs';
import {Arguments} from 'yargs';

export interface IFlags {
    [index: string]: Options;
}

export interface IMakeable {
    make(argv: Arguments): void;
}

export interface IRemovable {
    remove(argv: Arguments): void;
}

export interface IDocumentable {
    document(argv: Arguments): void;
}

export interface ILintable {
    lint(argv: Arguments): void;
}

export interface ITestable {
    test(argv: Arguments): void;
}

export interface IServable {
    serve(argv: Arguments): void;
}
