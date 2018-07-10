import fs from 'fs';
import path from 'path';
import util from 'util';
import chalk from 'chalk';
import {Arguments} from 'yargs';
import ACommand from '../ACommand';
import {IDocumentable, IMakeable, IRemovable, IServable, ITestable} from '../Commands';
import {ComponentsConfig} from 'react-devcli';
import Dispatcher from '../../Dispatcher/Dispatcher';

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

function Command<T extends { new(...args: any[]): {} }>(constructor: T): any {
    console.log(new constructor());

    return class extends constructor {
        name = 'new property';
        description = 'override';
    };
}

@Command
class Component extends ACommand implements IRemovable, ITestable, IMakeable, IServable, IDocumentable {
    public constructor() {
        const name = 'component';
        const description = 'Component description';
        const options = {};

        super(name, description, options);
    }

    public run(argv: Arguments, config: ComponentsConfig): void {
        Dispatcher.dispatch(argv, this);

        const componentName = argv._[1];

        if (componentName) {
            readFile(path.relative(
                __dirname, path.resolve(__dirname, '..', 'src', 'templates', 'components', 'Stateless.jsx')
            ))
                .then((data: Buffer): Promise<string> => {
                    return Promise.resolve(data.toString().split('$NAME').join('SomeName'));
                })
                .then(async (component: string): Promise<void> => {
                    if (!fs.existsSync(path.resolve(config.path))) {
                        fs.mkdirSync(path.resolve(config.path));
                    }

                    await writeFile(path.resolve(config.path, `${componentName}.jsx`), component);
                });
        } else {
            console.log(chalk.red('Specify a component name!'));
        }
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
        console.log('making');
    }

    public serve(argv: Arguments): void {
        console.log(argv);
    }

    public document(argv: Arguments): void {
        console.log(argv);
    }
}

export default Component;
