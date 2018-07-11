import {js, ts} from './Test';

describe('Test template test suite', (): void => {
    test('should match test template snapshot for JS language', (): void => {
        expect(js()).toMatchSnapshot();
    });

    test('should match test template snapshot for TS language', (): void => {
        expect(ts()).toMatchSnapshot();
    });
});
