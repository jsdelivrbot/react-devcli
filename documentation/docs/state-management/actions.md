---
title: Actions
sidebar_label: Actions
---

<img align="left" src="https://cdn.jsdelivr.net/gh/steevehook/react-devcli@5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Creates the User actions

```bash
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
```

<br/>

<img align="left" src="https://cdn.jsdelivr.net/gh/steevehook/react-devcli@5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Removes the User actions

```bash
react action remove User
react action rm User
    -r
    --reducer
```

<br/>

<img align="left" src="https://cdn.jsdelivr.net/gh/steevehook/react-devcli@5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Lints the User actions

```bash  
react action lint User
    # Fix all linting errors related to actions file
    -f
    --fix
```

<br/>

<img align="left" src="https://cdn.jsdelivr.net/gh/steevehook/react-devcli@5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Runs the tests for the User actions

```bash  
react action test User
```
