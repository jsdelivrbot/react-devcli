import {js, ts} from './ActionTypes';

describe('ActionTypes template test suite', (): void => {
    test('should match action types template snapshot for JS language', (): void => {
        expect(js()).toMatchSnapshot();
    });

    test('should match action types template snapshot for TS language', (): void => {
        expect(ts()).toMatchSnapshot();
    });
});
