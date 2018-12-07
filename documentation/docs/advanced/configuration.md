---
title: Configuration
sidebar_label: Configuration
---

<img align="left" 
src="https://cdn.jsdelivr.net/gh/steevehook/react-devcli@5ef47b56/icons/markers/experimental.svg" height="35px">

<br/>

react.config.js

```js
module.exports = () => {
    return {
        project: {
            path: process.cwd()
        },
        router: {
            path: process.cwd()
        },
        components: {
            path: `${process.cwd()}/components`,
            propTypes: true,
            scssFile: true,
            index: true,
            extension: 'jsx',
            case: 'pascal'
        },
        store: {
            path: process.cwd()
        },
        reducers: {
            path: `${process.cwd()}/reducers`,
            componentBased: true
        },
        actions: {
            path: `${process.cwd()}/actions`,
            componentBased: true,
            index: true,
            separateTypes: true
        },
        selectors: {
            path: `${process.cwd()}/selectors`,
            componentBased: true,
            onePerFile: false,
            index: true
        },
        tests: {
            path: `${process.cwd()}/__tests__`,
            componentBased: true
        },
        commands: {
            path: `${process.cwd()}/react-devcli/commands`
        },
        templates: {
            path: `${process.cwd()}/react-devcli/templates`
        },
        docs: {
        },
        serve: {
            port: 3000,
            theme: 'light'
        },
        engines: {
            language: 'js',
            testing: {
                framework: 'jest',
                configFile: 'jest.config.js'
            },
            linting: {
                tool: 'eslint',
                configFile: '.eslintrc'
            }
        }
    }
};
```

### Configuration table

| KEY                           | TYPE                          | DEFAULT                      | DESCRIPTION                                                                               |
|:----------------------------- |:------------------------------|:-----------------------------|:------------------------------------------------------------------------------------------|
| `project.path`                | `string`                      | `process.cwd()`              | The path of the developing project                                                        |
| `router.path`                 | `string`                      | `process.cwd()`              | The path of the application router                                                        |
| `components.path`             | `string`                      | `process.cwd()`/components   | The components path (location)                                                            |
| `components.propTypes`        | `boolean`                     | true                         | Specify wether or not to generate propTypes for component                                 |
| `components.scssFile`         | `boolean`                     | true                         | Specify wether or not to create scss file for created component                           |
| `components.index`            | `boolean`                     | true                         | Specify wether or not component should be reexported from index file                      |
| `components.extension`        | `jsx` or `tsx`                | jsx                          | Specify the extension of the component, desirebly jsx or tsx, over js                     |
| `components.case`             | `pascal` or `camel` or `dot`  | pascal                       | Specify what should be the case when naming a component                                   |
| `store.path`                  | `string`                      | `process.cwd()`              | The path of the application store                                                         |
| `reducers.path`               | `string`                      | `process.cwd()`/reducers     | The reducers location or componentBased, that will place it next to the component         |  
| `reducers.componentBased`     | `boolean`                     | true                         | Specifies whether or not the reducers should be placed next to the component              |  
| `actions.path`                | `string`                      | `process.cwd()`/actions      | The actions location or componentBased that will place it next to the component           |
| `actions.componentBased`      | `boolean`                     | true                         | Specifies whether or not the actions should be placed next to the component               |
| `actions.separateTypes`       | `boolean`                     | true                         | Create separate file for action types (constants)                                         |
| `actions.index`               | `boolean`                     | true                         | Create index file and reexport actions file from it                                       |
| `selectors.path`              | `string`                      | `process.cwd()`/selectors    | The selectors location or componentBased that will place it next to the component         |
| `selectors.componentBased`    | `boolean`                     | true                         | Specifies whether or not the selectors should be placed next to the component             |
| `selectors.onePerFile`        | `boolean`                     | false                        | Specifies whether or not the selectors should be created in individual files              |
| `selectors.index`             | `boolean`                     | true                         | Specifies whether or not the selectors should be reexported from index file               |
| `tests.path`                  | `object`                      | `project.path`/__tests__     | The test files location                                                                   |
| `tests.componentBased`        | `boolean`                     | true                         | Specifies whether or not the test files should be created alongside components            |
| `commands.path`               | `atring`                      | `project.path`/commands      | The custom commands files location                                                        |
| `templates.path`              | `string`                      | `project.path`/templates     | The templates location                                                                    |
| `docs`                        | `object`                      | NONE                         | The docs configuration object                                                             |
| `serve.port`                  | `number`                      | 3000                         | Specifies the port of the server, where the component will be served from                 |
| `serve.theme`                 | `light` or `dark`             | light                        | Specifies the theme of sandbox environment, where the component will be served            |
| `engines.language`            | `js` or `ts`                  | js                           | The main language of the project                                                          |
| `engines.testing.framework`   | `jest` or `mocha` or `jasmine`| jest                         | The engines.testing configuration object                                                  |
| `engines.testing.configFile`  | `string`                      | jest.config.js               | The engines.testing configuration object                                                  |
| `engines.linting.tool`        | `eslint` or `tslint`          | eslint                       | The engines.linting configuration object                                                  |
| `engines.linting.configFile`  | `string`                      | .eslintrc                    | The engines.linting configuration object                                                  |
