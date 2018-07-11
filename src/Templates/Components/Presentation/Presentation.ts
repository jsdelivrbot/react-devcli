export const statelessJS = (): string => {
    return [
        'import React from \'react\';',
        '',
        'export const REACT__COMPONENT__NAME = (props) => (',
        '   <div>',
        '       REACT__COMPONENT__NAME Stateless Component',
        '   </div>',
        ');',
    ].join('\n');
};

export const statefulJS = (): string => {
    return [
        'import React from \'react\';',
        '',
        'export class REACT__COMPONENT__NAME extends React.Component {',
        '   constructor(props) {',
        '       super(props);',
        '   }',
        '',
        '   render() {',
        '   }',
        '};',
    ].join('\n');
};

export const statelessTS = (): string => {
    return [
        'import React from \'react\';',
        '',
        'export const REACT__COMPONENT__NAME = (props) => (',
        '   <div>',
        '       REACT__COMPONENT__NAME Stateless Component',
        '   </div>',
        ');',
    ].join('\n');
};

export const statefulTS = (): string => {
    return [
        'import React from \'react\';',
        '',
        'export class REACT__COMPONENT__NAME extends React.Component {',
        '   constructor(props) {',
        '       super(props);',
        '   }',
        '',
        '   render() {',
        '   }',
        '};',
    ].join('\n');
};
