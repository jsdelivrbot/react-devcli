import {Arguments} from 'yargs';
import ACommand from '../Commands/ACommand';
import {
    DocumentAliasesEnum,
    MakeAliasesEnum,
    RemoveAliasesEnum,
    CommandsEnum
} from './CommandStrategy/Commands';
import {
    IDocumentable,
    IMakeable,
    IRemovable,
    IServable,
    ITestable
} from '../Commands/CommandContracts';

class Dispatcher {
    public static dispatch(argv: Arguments, command: ACommand): void {
        const subCommand = argv._[1];
        switch (subCommand) {
            case MakeAliasesEnum.Mk:
            case CommandsEnum.Make:
                if (this.hasMake(command)) {
                    command.make(argv);
                } else {
                    this.throwMemberInExistence(CommandsEnum.Make);
                }
                break;

            case RemoveAliasesEnum.Rm:
            case CommandsEnum.Remove:
                if (this.hasRemove(command)) {
                    command.remove(argv);
                } else {
                    this.throwMemberInExistence(CommandsEnum.Remove);
                }
                break;

            case DocumentAliasesEnum.Doc:
            case CommandsEnum.Document:
                if (this.hasDocument(command)) {
                    command.document(argv);
                } else {
                    this.throwMemberInExistence(CommandsEnum.Document);
                }
                break;

            case CommandsEnum.Serve:
                if (this.hasServe(command)) {
                    command.serve(argv);
                } else {
                    this.throwMemberInExistence(CommandsEnum.Serve);
                }
                break;

            case CommandsEnum.Test:
                if (this.hasTest(command)) {
                    command.test(argv);
                } else {
                    this.throwMemberInExistence(CommandsEnum.Test);
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
        return CommandsEnum.Make in (command as IMakeable);
    }

    private static hasRemove(command: any): command is IRemovable {
        return CommandsEnum.Remove in (command as IRemovable);
    }

    private static hasDocument(command: any): command is IDocumentable {
        return CommandsEnum.Document in (command as IDocumentable);
    }

    private static hasServe(command: any): command is IServable {
        return CommandsEnum.Serve in (command as IServable);
    }

    private static hasTest(command: any): command is ITestable {
        return CommandsEnum.Test in (command as ITestable);
    }
}

export default Dispatcher;
