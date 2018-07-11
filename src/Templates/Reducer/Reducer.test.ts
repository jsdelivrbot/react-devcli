import {js, ts} from './Reducer';

describe('Reducer template test suite', (): void => {
    test('should match reducer template snapshot for JS language', (): void => {
        expect(js()).toMatchSnapshot();
    });

    test('should match reducer template snapshot for TS language', (): void => {
        expect(ts()).toMatchSnapshot();
    });
});
