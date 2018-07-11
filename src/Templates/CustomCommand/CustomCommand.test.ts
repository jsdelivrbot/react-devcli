import {js, ts} from './CustomCommand';

describe('CustomCommand template test suite', (): void => {
    test('should match custom command template snapshot for JS language', (): void => {
        expect(js()).toMatchSnapshot();
    });

    test('should match custom command template snapshot for TS language', (): void => {
        expect(ts()).toMatchSnapshot();
    });
});
