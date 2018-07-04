module.exports = () => {
    return {
        components: {
            path: `${process.cwd()}/components`,
            propTypes: true,
            scssFile: true,
            index: false,
            exportFromIndex: false
        },
        reducers: {
            path: `${process.cwd()}/reducers`,
            componentBased: false
        },
        actions: {
            path: `${process.cwd()}/actions`,
            componentBased: false,
            index: false,
            separateActionTypes: false
        },
        selectors: {
            path: `${process.cwd()}/selectors`,
            componentBased: false
        },
        tests: {
            path: `${process.cwd()}/__tests__`,
            componentBased: false
        },
        commands: {
            path: `${process.cwd()}/react-devcli/commands`
        },
        templates: {
            path: `${process.cwd()}/react-devcli/templates`
        },
        engines: {
            language: 'js',
            testing: 'mocha'
        }
    };
};
