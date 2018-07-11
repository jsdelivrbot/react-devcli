import {findAndReplace} from './Template';

describe('Template utility test suite', (): void => {
    const inputTemplate = [
        'import React from \'react\';',
        '',
        'export const REACT__COMPONENT__NAME = (props) => (',
        '   <div>',
        '       REACT__COMPONENT__NAME Stateless Component',
        '       <header>REACT__HEADER__TITLE</header>',
        '   </div>',
        ');',
    ].join('\n');
    const outputTemplate = [
        'import React from \'react\';',
        '',
        'export const Welcome = (props) => (',
        '   <div>',
        '       Welcome Stateless Component',
        '       <header>Hello World</header>',
        '   </div>',
        ');',
    ].join('\n');

    test('should replace template string with given object properties', (): void => {
        const data = {
            REACT__COMPONENT__NAME: 'Welcome',
            REACT__HEADER__TITLE: 'Hello World'
        };
        expect(findAndReplace(inputTemplate, data)).toBe(outputTemplate);
    });

    test('should replace template string with given object properties with wrong case', (): void => {
        const data = {
            react__component__name: 'Welcome',
            React__hEADER__tITLe: 'Hello World'
        };
        expect(findAndReplace(inputTemplate, data)).toBe(outputTemplate);
    });
});
