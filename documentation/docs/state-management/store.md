---
title: Store
sidebar_label: Store
---

Currently by Store we mean `Redux` store, which is the only store supported at the moment,
but other implementations such as `Mobx` can be `future considerations`.

The store is here to help us solve the `props drilling` problem, which in React terms
means when we have a bigger level of nested components that implies passing down props
to components which don't need them.

This way we end up with `cluttered` and `coupled` components. Redux store comes to solve this
issue by introducing `one way data flow`, which make it easy to manipulate state across components.

<br/>

<img align="left" src="https://cdn.jsdelivr.net/gh/steevehook/react-devcli@5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Creates application store

```bash
react store make
react store mk
    # Specify a custom name for the store, by default is AppStore
    -n
    --name
    
    # Specify the name of store provider.
    # By default the store provider is Redux
    -p
    --provider
```

<br/>

<img align="left" src="https://cdn.jsdelivr.net/gh/steevehook/react-devcli@5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Removes application store

Note: it prompts to prevent accidental removal

```bash
react store remove
react store rm
    # Removes all reducers associated with the store
    -a
    --all
```

<br/>

<img align="left" src="https://cdn.jsdelivr.net/gh/steevehook/react-devcli@5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Adds UsersReducer reducer to the store

```bash
react store add UsersReducer
    # Creates the reducer and adds it to the store
    -r
    --reducer
  
    # Specify if when creating the reducer it should also create actions file
    --actions
```

<br/>

<img align="left" src="https://cdn.jsdelivr.net/gh/steevehook/react-devcli@5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Removes UsersReducer reducer from application store

```bash
react store remove UsersReducer
react store rm UsersReducer
    # Removes the reducer file when removing it from the store
    -r
    --reducer
  
    # Remove actions along with reducer, when removing it from the store
    --actions
```
