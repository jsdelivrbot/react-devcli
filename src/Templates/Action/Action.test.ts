import {js, ts} from './Action';

describe('Action template test suite', (): void => {
    test('should match action template snapshot for JS language', (): void => {
        expect(js()).toMatchSnapshot();
    });

    test('should match action template snapshot for TS language', (): void => {
        expect(ts()).toMatchSnapshot();
    });
});
