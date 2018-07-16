---
title: Components
sidebar_label: Components
---

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

Lints `Home` component

```bash
react component lint Home
    # Fix all linting errors related to component
    -f
    --fix
```

<br/>

Runs tests for `Home` component

```bash
react component test Home
```

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
