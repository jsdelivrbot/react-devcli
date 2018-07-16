---
title: Components
sidebar_label: Components
---

Creates Home component in the specified location from `react.config.js`

```bash
react component make Home
react component mk Home
    # Create stateless functional component
    --stateless
  
    # Create stateful functional component
    --stateful
  
    # Create stateful component without constructor
    --no-constructor

    # Create a Container component
    --container
  
    # Create connected to store component
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
```

<br/>

Removes Home component

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

Lints Home component

```bash
react component lint Home
    # Fix all linting errors related to component
    -f
    --fix
```

<br/>

Runs tests for Home component

```bash
react component test Home
```

<br/>

Serves Home component inside a new browser tab

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
