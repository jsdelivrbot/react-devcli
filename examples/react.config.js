module.exports = () => {
    const path = `${process.cwd()}/react-devcli`;

    return {
        path,
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
            types: {
            }
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
            path: `${path}/commands`
        },
        templates: {
            path: `${path}/templates`
        },
        engines: {
            language: "js",
            testing: {},
            linting: {}
        }
    };
};
