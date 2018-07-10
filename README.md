# react-devcli

## The missing CLI tool for React developers. Simple react cli devtools package for boosting development in React.js

#### Library size: 15KB

Note: Current library is not function and subject to change 
ETA: 25-30 July 2018 (First MVP)

### Installation
```bash
# YARN
yarn global add react-devcli
  
# NPM
npm install -g react-devcli
```

### Demo
### [GIF HERE]

### Initialize
##### Commands
```bash
# Initialize react-devcli
# Adding the -y flag will generate this default configuration
react init
 
# Creates a new react application, with a simple example based on react.config.js configuration or default configuration if none provided
react new app
```
##### Flags

### Router
##### Commands
```bash
# Creates application router
react router make
react component mk
 
# Removes application router
react router remove
react component rm
 
# Adds HomePage component route 
react router add HomePage
 
# Removes HomePage component route from application router 
react router remove HomePage
react router rm HomePage
```

##### Flags

--exact
--route
--component

### Components
##### Commands
```bash
# Creates Home component
react component make Home
react component mk Home
 
# Removes Home component
react component remove Home
react component rm Home
 
# Lints Home component
react component lint Home
 
# Runs tests for Home component
react component test Home
 
# Serves Home component inside a new browser tab
react component serve Home
```
##### Flags

### Store
##### Commands
```bash
# Creates application store
react store make
react store mk
 
# Removes application store
# Note: it prompts to prevent accidental removal
react store remove
react store rm
 
# Adds UsersReducer reducer to the store
react store add UsersReducer
 
# Removes UsersReducer reducer from application store
react store remove UsersReducer
react store rm UsersReducer
```
##### Flags
--actions
--selectors

### Reducers
##### Commands
```bash
# Creates the Users reducer
react reducer make Users
react reducer mk Users
 
# Removes the Users reducer
react reducer remove Users
react reducer rn Users
 
# Lints the Users reducer
react reducer lint Users
 
# Runs test for Users reducer
react reducer test Users
```
##### Flags

#### Actions
##### Commands
```bash
# Creates the User actions
react action make User
react action mk User
 
# Removes the User actions
react action remove User
react action mk User
 
# Lints the User actions 
react action lint User
 
# Runs the tests for the User actions
react action test User
```
##### Flags


#### Selectors
##### Commands
```bash
# Creates the AuthenticatedUser selector
react selector make AuthenticatedUser
react selector mk AuthenticatedUser
 
# Removes the AuthenticatedUser selector
react selector remove AuthenticatedUser
react action rm AuthenticatedUser
 
# Lints the AuthenticatedUser selector
react selector lint AuthenticatedUser
 
# Runs the tests for the AuthenticatedUser selector
react selector test User
```
##### Flags

#### Context
##### Commands
```bash
# Creates ThemeContext context
react context make ThemeContext
react context mk ThemeContext
 
# Removes ThemeContext context
react context remove ThemeContext
react context rm ThemeContext
```
##### Flags

#### Command
##### Commands
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
 
# Runs test for the custom HelloWorld command
react command test HelloWorld
```
##### Flags

#### Docs
##### Commands
```bash
# Statically serves all documented components
react docs
 
# Creates a empty doc file for Home component
react docs make Home
react docs mk Home
 
# Removes the doc file for Home component
react docs remove Home
react docs rm Home
```
##### Flags
--coverage

#### Test
##### Commands
```bash
# Runs test on all application
react test
 
# Creates a test file for Home component
react test make Home
react test mk Home
 
# Removes the test file for Home component
react test remove Home
react test rm Home
 
# Runs the test file for Home component
react test run Home
```
##### Flags
--coverage

#### Lint
```bash
# Lints the whole project
react lint
```

#### Help
```bash
# Displays general description about each available command
react --help
 
# Displays detailed information about a specific command and its available flags
react [COMMAND] [SUBCOMMAND] --help
```

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
