# react-devcli

## The missing CLI tool for React developers. Simple react cli devtools package for boosting development in React.js

Library size: 15KB

## Note: Current library and config is subject to change and not yet functional, so WIP
### ETA: 25-30 July 2018 (First MVP)

### Installation

```bash
yarn global add react-devcli
```

```bash
npm install -g react-devcli
```

### Demo
### [GIF HERE]

### Commands

------------------------------------------------------------------------------------------------------------------------
#### Initialize

Initialize `react-devcli`

Adding the `-y` flag will generate this default configuration
```bash
react init
```

Creates a new react application called `app`, with a simple example based on `react.config.js` configuration or default configuration if none provided
```bash
react new app
```
------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------
#### Router

Creates application router
```bash
react router make
react component mk
```
```jsx
// Add generated router
```

Removes application router
Note: it prompts to prevent accidental removal

```bash
react router remove
react component rm
```

Adds `HomePage` component route
```bash
react router add `HomePage`
```

Removes `HomePage` component route from application router
```bash
react router remove HomePage
react router rm HomePage
```

--exact
--route
--component

------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------
#### Components

Creates `Home` component
```bash
react component make Home
react component mk Home
```
```jsx
// Add generated component
```

Removes `Home` component
```bash
react component remove Home
react component rm Home
```

Lints `Home` component, based on provided configuration, or default one
```bash
react component lint Home
```

Runs tests for `Home` component
```bash
react component test Home
```

Creates documentation for `Home` component
```bash
react component document Home
react component doc Home
```

Serves `Home` component inside a new browser tab
```bash
react component serve Home
```
------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------
#### Store

Creates application store
```bash
react store make
react store mk
```
```js
// Add generated store
```

Removes application store
Note: it prompts to prevent accidental removal
```bash
react store remove
react store rm
```

Adds `UsersReducer` reducer to the store
```bash
react store add `UsersReducer`
```

Removes `UsersReducer` reducer from application store
```bash
react store remove UsersReducer
react store rm UsersReducer
```

--actions
--selectors

------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------
#### Reducers

Creates the `Users` reducer
```bash
react reducer make Users
react reducer mk Users
```
```js
// Add generated reducer
```

Removes the `Users` reducer
```bash
react reducer remove Users
react reducer rn Users
```

Lints the `Users` reducer
```bash
react reducer lint Users
```

Runs test for `Users` reducer
```bash
react reducer test Users
```

Documents the `Users` reducer
```bash
react reducer document Users
react reducer doc Users
```
---

------------------------------------------------------------------------------------------------------------------------
#### Actions

Creates the `User` actions
```bash
react action make User
react action mk User
```
```js
// Add generated action
```

Removes the `User` actions
```bash
react action remove User
react action mk User
```

Lints the `User` actions
```bash
react action lint User
```

Runs the tests for the `User` actions
```bash
react action test User
```

Documents the `User` actions
```bash
react action document User
react action doc User
```
------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------
#### Selectors

Creates the `AuthenticatedUser` selector
```bash
react selector make AuthenticatedUser
react selector mk AuthenticatedUser
```
```js
// Add generated selector
```

Removes the `AuthenticatedUser` selector
```bash
react selector remove AuthenticatedUser
react action rm AuthenticatedUser
```

Lints the `AuthenticatedUser` selector
```bash
react selector lint AuthenticatedUser
```

Runs the tests for the `AuthenticatedUser` selector
```bash
react selector test User
```

Documents the `AuthenticatedUser` selector
```bash
react action document AuthenticatedUser
react action doc AuthenticatedUser
```
------------------------------------------------------------------------------------------------------------------------

#### Context

Creates `ThemeContext` context
```bash
react context make ThemeContext
react context mk ThemeContext
```
```js
// Add generated context
```

Removes `ThemeContext` context
```bash
react context remove ThemeContext
react context rm ThemeContext
```

------------------------------------------------------------------------------------------------------------------------
#### Command

Creates new custom `HelloWorld` command
```bash
react command make HelloWorld
react command mk HelloWorld
```
```js
// Add generated command
```

Removes custom `HelloWorld` command
```bash
react command remove HelloWorld
react command rm HelloWorld
```

Runs custom `HelloWorld` command
```bash
react command run HelloWorld
```

Lints the custom `HelloWorld` command
```bash
react command lint HelloWorld
```

Runs test for the custom `HelloWorld` command
```bash
react command test HelloWorld
```

------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------
#### Lint

Lints the whole project
```bash
react lint
```

------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------
#### Docs

Statically serves all documented components
```bash
react docs
```

Creates a empty doc file for `Home` component
```bash
react docs make Home
react docs mk Home
```

Removes the doc file for `Home` component
```bash
react docs remove Home
react docs rm Home
```

--coverage

------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------
#### Serve

Statically serves all component examples
```bash
react serve
```

--coverage

------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------
#### Help

Displays general description about each available command on `react-devcli`
```bash
react --help
```

Displays detailed information about a specific command and its available flags with description
```bash
react [COMMAND] [SUBCOMMAND] --help
```
------------------------------------------------------------------------------------------------------------------------

### Flags

TO BE ADDED FOR EACH COMMAND UP WHERE DECLARED

### Configuration specification

react.config.js
```js
module.exports = () => {
    return {
        project: {},
        components: {
            path: `${process.cwd()}/components`,
            propTypes: true,
            scssFile: true,
            index: false,
            exportFromIndex: false,
            extension: 'jsx',
            naming: {
                PascalCase: true,
                camelCase: false,
                dotNotation: false
            }
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
            separateFile: true,
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
        docs: {
        },
        engines: {
            language: 'js',
            testing: {},
            linting: {}
        }
    }
};
```

TABLE DETAILED INFORMATION ABOUT EACH CONFIG KEY HERE
