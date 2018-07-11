import {js, ts} from './Store';

describe('Store template test suite', (): void => {
    test('should match store template snapshot for JS language', (): void => {
        expect(js()).toMatchSnapshot();
    });

    test('should match store template snapshot for TS language', (): void => {
        expect(ts()).toMatchSnapshot();
    });
});
