import {js, ts} from './Action';

describe('Action template test suite', (): void => {
    test('should match action template snapshot for JS language', (): void => {
        const template = js({name: 'Loader', actions: ['on', 'off']});
        expect(template).toMatchSnapshot();
    });

    test('should match action template snapshot for TS language', (): void => {
        expect(ts()).toMatchSnapshot();
    });
});
