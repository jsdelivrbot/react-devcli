import {Arguments} from 'yargs';
import ACommand from '../../commands/Command/ACommand';
import {
    DocumentAliasesEnum,
    MakeAliasesEnum,
    RemoveAliasesEnum,
    SubCommandsEnum
} from './SubCommands';
import {
    IDocumentable,
    IMakeable,
    IRemovable,
    IServable,
    ITestable
} from '../../commands/Command/contracts/ISubCommands';

class Dispatcher {
    public static dispatch(argv: Arguments, command: ACommand): void {
        const subCommand = argv._[1];
        switch (subCommand) {
            case MakeAliasesEnum.Mk:
            case SubCommandsEnum.Make:
                if (this.hasMake(command)) {
                    command.make(argv);
                } else {
                    this.throwMemberInExistence(SubCommandsEnum.Make);
                }
                break;

            case RemoveAliasesEnum.Rm:
            case SubCommandsEnum.Remove:
                if (this.hasRemove(command)) {
                    command.remove(argv);
                } else {
                    this.throwMemberInExistence(SubCommandsEnum.Remove);
                }
                break;

            case DocumentAliasesEnum.Doc:
            case SubCommandsEnum.Document:
                if (this.hasDocument(command)) {
                    command.document(argv);
                } else {
                    this.throwMemberInExistence(SubCommandsEnum.Document);
                }
                break;

            case SubCommandsEnum.Serve:
                if (this.hasServe(command)) {
                    command.serve(argv);
                } else {
                    this.throwMemberInExistence(SubCommandsEnum.Serve);
                }
                break;

            case SubCommandsEnum.Test:
                if (this.hasTest(command)) {
                    command.test(argv);
                } else {
                    this.throwMemberInExistence(SubCommandsEnum.Test);
                }
                break;

            default:
                command.help(argv);
        }
    }

    private static throwMemberInExistence(member: string): never {
        throw new Error(`${member} does not exist on current command class`);
    }

    private static hasMake(command: any): command is IMakeable {
        return SubCommandsEnum.Make in (command as IMakeable);
    }

    private static hasRemove(command: any): command is IRemovable {
        return SubCommandsEnum.Remove in (command as IRemovable);
    }

    private static hasDocument(command: any): command is IDocumentable {
        return SubCommandsEnum.Document in (command as IDocumentable);
    }

    private static hasServe(command: any): command is IServable {
        return SubCommandsEnum.Serve in (command as IServable);
    }

    private static hasTest(command: any): command is ITestable {
        return SubCommandsEnum.Test in (command as ITestable);
    }
}

export default Dispatcher;
