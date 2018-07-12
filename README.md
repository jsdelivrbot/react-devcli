# react-devcli

## The missing CLI tool for React developers. Simple React CLI devtools for boosting development with React.js ecosystem

#### Library size: 16KB

<img src="https://cdn.rawgit.com/steevehook/react-devcli/52299264/logo.png" alt="react-devcli" height="80px"/>

<br/>

Note: Current library is not functional and subject to change 
ETA: 25-30 July 2018 (First MVP)

<br/><br/>

### Demo

![Demo](https://cdn.rawgit.com/steevehook/react-devcli/52299264/demo.gif)

<br/><br/>

### Markers

- `DRAFT` - the feature is under development and is subject to change or not even working
- `DEPRECATED` - the feature is available to use but is likely going to be removed as of next major version
- `STANDARD` - the feature is available and fully functional
- `EXPERIMENTAL` - the feature is available and fully functional, but experimental which is subject to change in minor versions

<br/><br/>

### Installation

```bash
# YARN
yarn global add react-devcli
  
# NPM
npm install -g react-devcli
```

<br/><br/>

### Initialize

`DRAFT`

```bash
# Initialize react-devcli
# Adding the -y flag will generate this default configuration
react init
    # Generates react default configuration file without any prompts
    -y
    --yes
  
# Creates a new react application, with a simple example based on react.config.js configuration
# Using default configuration if none provided
react new app
    # Only creates the directory structure without any example
    --no-example
```

<br/><br/>

### Router

`DRAFT`

```bash
# Creates application router
react router make
react component mk
    # Specifies a custom name for app router, by default is AppRouter
    -n
    --name
  
# Removes application router
react router remove
react router rm
    # Removes all routes inside the router
    -a
    --all
  
    # Dangerous, but removes all associated components along with the router
    --components
 
# Adds HomePage component route 
react router add HomePage
    # Creates HomePage component alongside route 
    -c
    --component
  
    # The URL of the route, by default hyphenated i.e /home-page
    -r
    --route
  
    # Whether or not the routes matches the exact URL or not, true by default
    -e
    --exact
  
    # Specify a URL param for the route
    -p
    --param
  
# Removes HomePage component route from application router 
react router remove HomePage
react router rm HomePage
    # Removes associated component along with the route
    -c
    --component
```

<br/><br/>

### Components

`DRAFT`

```bash
# Creates Home component
react component make Home
react component mk Home
    # Create stateless functional component
    --stateless
  
    # Create stateful functional component
    --stateful
  
    # Create stateful component without constructor
    --no-constructor
  
    # Create connected to store component
    -c
    --connected
  
    # Create wrapper page component, usually for a route
    -p
    --page
  
    # Create a Higher Order Component
    -h
    --hoc
  
    # Create reducer alongside component
    -r
    --reducer
  
    # Create test alongside component
    -t
    --test
  
    # Create markdown doc alongside component
    -d
    --doc
  
    # Specify language for template
    # By default is JS, but TS is also available
    -l
    --language
  
# Removes Home component
react component remove Home
react component rm Home
    # Remove reducer alongside component
    -r
    --reducer
  
    # If component is used as a route, remove the route as well
    --route
  
# Lints Home component
react component lint Home
    # Fix all linting errors related to component
    -f
    --fix
  
# Runs tests for Home component
react component test Home
  
# Serves Home component inside a new browser tab
react component serve Home
    # Specify the port which should be used when serving the component
    # By default the port is 3000
    -p
    --port
  
    # Specify the theme for serving the component, dark or light.
    # By default the theme is light
    -t
    --theme
```

<br/><br/>

### Store

`DRAFT`

```bash
# Creates application store
react store make
react store mk
    # Specify a custom name for the store, by default is AppStore
    -n
    --name
  
# Removes application store
# Note: it prompts to prevent accidental removal
react store remove
react store rm
    # Removes all reducers associated with the store
    -a
    --all
  
# Adds UsersReducer reducer to the store
react store add UsersReducer
    # Creates the reducer and adds it to the store
    -r
    --reducer
  
    # Specify if when creating the reducer it should also create actions file
    --actions
  
# Removes UsersReducer reducer from application store
react store remove UsersReducer
react store rm UsersReducer
    # Removes the reducer file when removing it from the store
    -r
    --reducer
  
    # Remove actions along with reducer, when removing it from the store
    --actions
```

<br/><br/>

### Reducers

`DRAFT`

```bash
# Creates the Users reducer
react reducer make Users
react reducer mk Users
    # Create actions file, when creating the reducer
    --actions
  
    # Create selectors file, when creating the reducer
    -s
    --selectors
  
# Removes the Users reducer
react reducer remove Users
react reducer rm Users
    # Remove actions file, when removing the reducer
    --actions
  
    # Remove selectors file, when removing the reducer
    -s
    --selectors
  
# Lints the Users reducer
react reducer lint Users
    # Fix all linting errors related to reducer
    -f
    --fix
  
# Runs test for Users reducer
react reducer test Users
```

<br/><br/>

#### Actions

`DRAFT`

```bash
# Creates the User actions
react action make User
react action mk User
    # Create reducer, when creating the actions file
    -r
    --reducer
  
    # Create selectors file, when creating the actions file
    -s
    --selectors
  
    # Action name to be exported inside actions file.
    # The number of instances of this flag can be variadic
    --action
  
    # Specify whether or not should create separate file for action types
    # By default separateActionTypes is false
    --separateActionTypes
  
    # Place actions inside a typescript enum
    --tsEnum
 
# Removes the User actions
react action remove User
react action rm User
    -r
    --reducer
  
# Lints the User actions 
react action lint User
    # Fix all linting errors related to actions file
    -f
    --fix
  
# Runs the tests for the User actions
react action test User
```

<br/><br/>

#### Selectors

`DRAFT`

```bash
# Creates the AuthenticatedUser selector
react selector make AuthenticatedUser
react selector mk AuthenticatedUser
    # Create reducer, when creating selectors file
    -r
    --reducer
  
    # Create actions file, when creating selectors file
    --actions
  
    # Selector name to be exported inside selectors file.
    # The number of instances of this flag can be variadic
    -s
    --selector
  
# Removes the AuthenticatedUser selector
react selector remove AuthenticatedUser
react action rm AuthenticatedUser
    # Remove reducer, when removing selectors file
    -r
    --reducer
  
    # Remove actions file, when removing selectors file
    --actions
  
# Lints the AuthenticatedUser selector
react selector lint AuthenticatedUser
    # Fix all linting errors related to selectors file
    -f
    --fix
  
# Runs the tests for the AuthenticatedUser selector
react selector test User
```

<br/><br/>

#### Context

`DRAFT`

```bash
# Creates ThemeContext context
react context make ThemeContext
react context mk ThemeContext
  
# Removes ThemeContext context
react context remove ThemeContext
react context rm ThemeContext
  
# Lints the custom ThemeContext context
react context lint ThemeContext
    # Fix all linting errors related to context file
    -f
    --fix
```

<br/><br/>

#### Command

`DRAFT`

```bash
# Creates new custom HelloWorld command
react command make HelloWorld
react command mk HelloWorld
  
# Removes custom HelloWorld command
react command remove HelloWorld
react command rm HelloWorld
  
# Runs custom HelloWorld command
react command run HelloWorld
  
# Lints the custom HelloWorld command
react command lint HelloWorld
    # Fix all linting errors related to actions file
    -f
    --fix
  
# Runs test for the custom HelloWorld command
react command test HelloWorld
```

<br/><br/>

#### Docs

`DRAFT`

```bash
# Statically serves all documented components
react docs
    # Display statistic information about how well are components documented
    --coverage
  
# Creates a empty doc file for Home component
react docs make Home
react docs mk Home
  
# Removes the doc file for Home component
react docs remove Home
react docs rm Home
```

<br/><br/>

#### Test

`DRAFT`

```bash
# Runs test on all application
react test
    # Display statistic information about how well are components tested
    --coverage
  
# Creates a test file for Home component
react test make Home
react test mk Home
  
# Removes the test file for Home component
react test remove Home
react test rm Home
    # Removes component along its documentation
    --component
  
# Runs the test file for Home component
react test run Home
```

<br/><br/>

#### Lint

`DRAFT`

```bash
# Lints the whole project
react lint
    # Fix all linting errors related to component
    -f
    --fix
```

<br/><br/>

#### Help

```bash
# Displays general description about each available command
react --help
 
# Displays detailed information about a specific command and available flags
react [COMMAND] [SUBCOMMAND] --help
```

<br/><br/>

#### Publishing

`DRAFT`

```bash
# Logs in into the specified provider's account
react login:jsbin
react login:jsfiddle
react login:codesandbox
react login:surge
react login:heroku

# Logs out from the specified provider's account
react logout:jsbin
react logout:jsfiddle
react logout:codesandbox
react logout:surge
react logout:heroku
  
# Publishes the React component to the specified provider
react publish:jsbin Component
react publish:jsfiddle Component
react publish:codesandbox Component
react publish:surge Component
react publish:heroku Component
```

<br/><br/>

### Configuration specification

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

| KEY                           | TYPE                      | DEFAULT                      | DESCRIPTION                                                                               |
|:----------------------------- |---------------------------|:-----------------------------|:------------------------------------------------------------------------------------------|
| `project.path`                | `string`                  | `process.cwd()`              | The path of the developing project                                                        |
| `router.path`                 | `string`                  | `process.cwd()`              | The path of the application router                                                        |
| `components.path`             | `string`                  | `process.cwd()`/components   | The components path (location)                                                            |
| `components.propTypes`        | `boolean`                 | true                         | Specify wether or not to generate propTypes for component                                 |
| `components.scssFile`         | `boolean`                 | true                         | Specify wether or not to create scss file for created component                           |
| `components.index`            | `boolean`                 | true                         | Specify wether or not component should be reexported from index file                      |
| `components.extension`        | `jsx \| tsx`              | jsx                          | Specify the extension of the component, desirebly jsx or tsx, over js                     |
| `components.case`             | `pascal \| camel \| dot`  | pascal                       | Specify what should be the case when naming a component                                   |
| `store.path`                  | `string`                  | `process.cwd()`              | The path of the application store                                                         |
| `reducers.path`               | `string`                  | `process.cwd()`/reducers     | The reducers location or componentBased, that will place it next to the component         |  
| `reducers.componentBased`     | `boolean`                 | true                         | Specifies whether or not the reducers should be placed next to the component              |  
| `actions.path`                | `string`                  | `process.cwd()`/actions      | The actions location or componentBased that will place it next to the component           |
| `actions.componentBased`      | `boolean`                 | true                         | Specifies whether or not the actions should be placed next to the component               |
| `actions.separateTypes`       | `boolean`                 | true                         | Create separate file for action types (constants)                                         |
| `actions.index`               | `boolean`                 | true                         | Create index file and reexport actions file from it                                       |
| `selectors.path`              | `string`                  | `process.cwd()`/selectors    | The selectors location or componentBased that will place it next to the component         |
| `selectors.componentBased`    | `boolean`                 | true                         | Specifies whether or not the selectors should be placed next to the component             |
| `selectors.onePerFile`        | `boolean`                 | false                        | Specifies whether or not the selectors should be created in individual files              |
| `selectors.index`             | `boolean`                 | true                         | Specifies whether or not the selectors should be reexported from index file               |
| `tests.path`                  | `object`                  | `project.path`/__tests__     | The test files location                                                                   |
| `tests.componentBased`        | `boolean`                 | true                         | Specifies whether or not the test files should be created alongside components            |
| `commands.path`               | `atring`                  | `project.path`/commands      | The custom commands files location                                                        |
| `templates.path`              | `string`                  | `project.path`/templates     | The templates location                                                                    |
| `docs`                        | `object`                  | NONE                         | The docs configuration object                                                             |
| `serve.port`                  | `number`                  | 3000                         | Specifies the port of the server, where the component will be served from                 |
| `serve.theme`                 | `light \| dar`            | light                        | Specifies the theme of sandbox environment, where the component will be served            |
| `engines.language`            | `js \| ts`                | js                           | The main language of the project                                                          |
| `engines.testing.framework`   | `jest \| mocha \| jasmine`| jest                         | The engines.testing configuration object                                                  |
| `engines.testing.configFile`  | `string`                  | jest.config.js               | The engines.testing configuration object                                                  |
| `engines.linting.tool`        | `eslint | tslint`         | eslint                       | The engines.linting configuration object                                                  |
| `engines.linting.configFile`  | `string`                  | .eslintrc                    | The engines.linting configuration object                                                  |

### Upcoming

- Add integrations with JSBin, JSFiddle, CodeSandbox, Surge and Heroku
- Add Sandbox for testing React components
- Add sharing possibility straight from sandbox
- Add possibility to upload docs for component somewhere

### CHANGELOG

[Check out history changes](https://github.com/steevehook/react-devcli/blob/master/CHANGELOG.md)
