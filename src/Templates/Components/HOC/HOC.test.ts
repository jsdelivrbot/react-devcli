import {statefulJS, statelessJS, statefulTS, statelessTS} from './HOC';

describe('HOC template test suite', (): void => {
    test('should match stateful HOC template snapshot for JS language', (): void => {
        expect(statefulJS()).toMatchSnapshot();
    });

    test('should match stateless HOC template snapshot for JS language', (): void => {
        expect(statelessJS()).toMatchSnapshot();
    });

    test('should match stateful HOC template snapshot for TS language', (): void => {
        expect(statefulTS()).toMatchSnapshot();
    });

    test('should match stateless HOC template snapshot for TS language', (): void => {
        expect(statelessTS()).toMatchSnapshot();
    });
});
