---
title: Components
sidebar_label: Components
---

Components are the core `building blocks` of React.js library
and it's how we `separate` and `chunk` our interfaces into `small`
`reusable` pieces of code

Since `components` is the only thing an `interface` consists of and is the
core utility React gives us, we have different `types of components`
based on different purposes.

In general there are 2 types of components: `presentational` and
`behavioral`, but in practice there are multiple patterns which
work well with components.

<br/>

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Creates `Home` component in the specified location from `react.config.js`

```bash
react component make Home
react component mk Home
    # Creates stateless functional component
    --stateless
  
    # Creates stateful class component
    --stateful
  
    # Creates stateful component without constructor
    --no-constructor

    # Creates component without prop types
    --no-prop-types

    # Creates a Container component
    --container
  
    # Create connected to store component
    --connected
  
    # Creates wrapper page component, usually for a route
    -p
    --page
  
    # Creates a Higher Order Component
    -h
    --hoc
    
    # Creates a component which uses render-props technique
    --render-props
  
    # Creates reducer alongside component
    -r
    --reducer
  
    # Creates test alongside component
    -t
    --test
  
    # Creates markdown doc alongside component
    -d
    --doc
  
    # Specifies language for template
    # By default is JS, but TS is also available
    -l
    --language
```

<br/>

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Removes `Home` component

```bash
react component remove Home
react component rm Home
    # Remove reducer alongside component
    -r
    --reducer
  
    # If component is used as a route, remove the route as well
    --route
```

<br/>

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Lints `Home` component

```bash
react component lint Home
    # Fix all linting errors related to component
    -f
    --fix
```

<br/>

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Runs tests for `Home` component

```bash
react component test Home
```

<br/>

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Serves `Home` component inside a new browser tab

```bash
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
