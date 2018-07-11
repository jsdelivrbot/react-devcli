import {statefulJS, statelessJS, statefulTS, statelessTS} from './Connected';

describe('Connected component template test suite', (): void => {
    test('should match stateful connected component template snapshot for JS language', (): void => {
        expect(statefulJS()).toMatchSnapshot();
    });

    test('should match stateless connected component template snapshot for JS language', (): void => {
        expect(statelessJS()).toMatchSnapshot();
    });

    test('should match stateful connected component template snapshot for TS language', (): void => {
        expect(statefulTS()).toMatchSnapshot();
    });

    test('should match stateless connected component template snapshot for TS language', (): void => {
        expect(statelessTS()).toMatchSnapshot();
    });
});
