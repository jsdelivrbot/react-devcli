import fs from 'fs';
import path from 'path';
import {Arguments} from 'yargs';
import ACommand from '../Command/ACommand';
import {IMakeable} from '../Command/contracts/IMakeable';
import {IRemovable} from '../Command/contracts/IRemovable';
import {IServable} from '../Command/contracts/IServeable';
import {ITestable} from '../Command/contracts/ITestable';
import {templates} from '../../config/paths';
import cli from '../../config/cli';

class Component extends ACommand implements IRemovable, ITestable, IMakeable, IServable {
    constructor() {
        const name = 'component';
        const description = 'Component description';
        const options = {
        };

        super(name, description, options);
    }

    public run(argv: Arguments): void {
        console.log(argv);

        let StatelessComponent;

        console.log(cli());

        fs.readFile(path.resolve(templates, 'Components', 'Stateless.jsx'), (_, data) => {
            StatelessComponent = data.toString().split('$NAME').join('SomeName');
            console.log(StatelessComponent);
        });
    }

    public help(argv: Arguments): void {
        console.log(argv);
    }

    public remove(argv: Arguments): void {
        console.log(argv);
    }

    public test(argv: Arguments): void {
        console.log(argv);
    }

    public make(argv: Arguments): void {
        console.log(argv);
    }

    public serve(argv: Arguments): void {
        console.log(argv);
    }
}

export default new Component();
