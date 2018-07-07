import fs from 'fs';
import path from 'path';
import util from 'util';
import chalk from 'chalk';
import {Arguments} from 'yargs';
import ACommand from '../Command/ACommand';
import {IMakeable} from '../Command/contracts/IMakeable';
import {IRemovable} from '../Command/contracts/IRemovable';
import {IServable} from '../Command/contracts/IServeable';
import {ITestable} from '../Command/contracts/ITestable';
import {ComponentsConfig} from 'react-devcli';

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Component extends ACommand implements IRemovable, ITestable, IMakeable, IServable {
    public constructor() {
        const name = 'component';
        const description = 'Component description';
        const options = {};

        super(name, description, options);
    }

    public run(argv: Arguments, config: ComponentsConfig): void {
        console.log('Hello');

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
    }

    public serve(argv: Arguments): void {
        console.log(argv);
    }
}

export default new Component();
