import {js, ts} from './Context';

describe('Context template test suite', (): void => {
    test('should match context template snapshot for JS language', (): void => {
        expect(js()).toMatchSnapshot();
    });

    test('should match context template snapshot for TS language', (): void => {
        expect(ts()).toMatchSnapshot();
    });
});
