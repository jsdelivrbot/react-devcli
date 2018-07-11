export const statelessJS = (): string => {
    return [
        'import React from \'react\';',
        '',
        'export class REACT__COMPONENT__NAME extends React.Component {',
        '   constructor(props) {',
        '       super(props);',
        '   }',
        '',
        '   render() {',
        '       const Component = this.props.component;',
        '',
        '       return (',
        '           <Component {...this.props}></Component>',
        '       );',
        '   }',
        '};',
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
        '       const Component = this.props.component;',
        '',
        '       return (',
        '           <Component {...this.props}></Component>',
        '       );',
        '   }',
        '};',
    ].join('\n');
};

export const statelessTS = (): string => {
    return [
        'import React from \'react\';',
        '',
        'export class REACT__COMPONENT__NAME extends React.Component {',
        '   constructor(props) {',
        '       super(props);',
        '   }',
        '',
        '   render() {',
        '       const Component = this.props.component;',
        '',
        '       return (',
        '           <Component {...this.props}></Component>',
        '       );',
        '   }',
        '};',
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
        '       const Component = this.props.component;',
        '',
        '       return (',
        '           <Component {...this.props}></Component>',
        '       );',
        '   }',
        '};',
    ].join('\n');
};

