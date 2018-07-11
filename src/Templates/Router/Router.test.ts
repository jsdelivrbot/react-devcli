import {js, ts} from './Router';

describe('Router template test suite', (): void => {
    test('should match router template snapshot for JS language', (): void => {
        expect(js()).toMatchSnapshot();
    });

    test('should match router template snapshot for TS language', (): void => {
        expect(ts()).toMatchSnapshot();
    });
});
