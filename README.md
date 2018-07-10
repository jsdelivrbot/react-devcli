# react-devcli

### The missing CLI tool for React developers. Simple React CLI devtools for boosting development with React.js ecosystem

#### Library size: 15KB

<img src="https://cdn.rawgit.com/steevehook/react-devcli/52299264/logo.png" alt="react-devcli" height="80px"/>
<br/>

Note: Current library is not function and subject to change 
ETA: 25-30 July 2018 (First MVP)

<br/>
<br/>

### Demo
![Demo](https://cdn.rawgit.com/steevehook/react-devcli/52299264/demo.gif)

<br/>
<br/>

### Installation
```bash
# YARN
yarn global add react-devcli
  
# NPM
npm install -g react-devcli
```

<br/>
<br/>

### Initialize
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

<br/>
<br/>

### Router
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

<br/>
<br/>

### Components
```bash
# Creates Home component
react component make Home
react component mk Home
    # Create stateless functional component
    -s
    --stateless
    
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

<br/>
<br/>

### Store
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

<br/>
<br/>

### Reducers
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

<br/>
<br/>

#### Actions
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

<br/>
<br/>


#### Selectors
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

<br/>
<br/>

#### Context
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

<br/>
<br/>

#### Command
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

<br/>
<br/>

#### Docs
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

<br/>
<br/>

#### Test
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

<br/>
<br/>

#### Lint
```bash
# Lints the whole project
react lint
    # Fix all linting errors related to component
    -f
    --fix
```

<br/>
<br/>

#### Help
```bash
# Displays general description about each available command
react --help
 
# Displays detailed information about a specific command and available flags
react [COMMAND] [SUBCOMMAND] --help
```

<br/>
<br/>

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
