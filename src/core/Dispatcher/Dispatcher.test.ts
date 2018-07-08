import Dispatcher from './Dispatcher';
import Component from '../../commands/Component/Component';

jest.mock('../../commands/Component/Component');

describe('Dispatcher test suite', (): void => {
    let command: Component;

    beforeEach((): void => {
        command = new Component();
    });

    test('should dispatch the right action on the right command', (): void => {
        const argv = {
            _: ['component', 'make'],
            $0: ''
        };
        Dispatcher.dispatch(argv, command);

        expect(command.make).toHaveBeenCalled();
    });

    test('should resolve to the right action when using command alias', (): void => {
        const argv = {
            _: ['component', 'mk'],
            $0: ''
        };
        Dispatcher.dispatch(argv, command);

        expect(command.make).toHaveBeenCalled();
    });
});
