---
title: Selectors
sidebar_label: Selectors
---

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Creates the AuthenticatedUser selector

```bash
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
```

<br/>

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Removes the AuthenticatedUser selector

```bash
react selector remove AuthenticatedUser
react action rm AuthenticatedUser
    # Remove reducer, when removing selectors file
    -r
    --reducer
  
    # Remove actions file, when removing selectors file
    --actions
```

<br/>

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Lints the AuthenticatedUser selector

```bash
react selector lint AuthenticatedUser
    # Fix all linting errors related to selectors file
    -f
    --fix
```

<br/>

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Runs the tests for the AuthenticatedUser selector

```bash  
react selector test User
```
