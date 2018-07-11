import {js, ts} from './Selector';

describe('Selector template test suite', (): void => {
    test('should match selector template snapshot for JS language', (): void => {
        expect(js()).toMatchSnapshot();
    });

    test('should match selector template snapshot for TS language', (): void => {
        expect(ts()).toMatchSnapshot();
    });
});
