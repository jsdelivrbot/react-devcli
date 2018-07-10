import yargs from 'yargs';
import {IFlags} from './CommandContracts';

export const Command = (n: string, d: string, f: IFlags): ClassDecorator => {
    return (constructor: any): any => {
        yargs.command(n, d, f);

        return class extends constructor {
            public name = n;
            public description = d;
            public flags = f;
        };
    };
};
