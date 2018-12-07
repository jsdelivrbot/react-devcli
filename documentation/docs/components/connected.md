---
title: Connected Components
sidebar_label: Connected
---

`Connected` components are `Redux specific`, which means if there's a Redux `store` in place
it's easy to take any component which might want to `manipulate state` and just `connect` it
to the `store` so it can alter the state.

Good to mention also that Redux store is a `one way data flow`, meaning there is rarely
the case when a component might need it's `own state`, whereas the state is `passed down` as `props`
and every component can the `alter` the `state` kept inside the `store`,
by simply `dispatching` some `actions`.

It's usually a good practice to `export` the un connected component
and the connected component separately, so it's also easier to reuse and test the component, which
also improves maintainability.

Notice that the component can be either stateless or stateful, aka functional or class
However desirable to be stateless functional

<br/>

<img align="left" src="https://cdn.jsdelivr.net/gh/steevehook/react-devcli@5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Automatically connects the plain component to the Redux store and exports it either from
`index` file or `export default` it from the same file where plain component is located

Creates connected component

```bash
react component make Loader --connected
react component mk Loader --connected
```

<br/>

The generated boilerplate should look something like this:

```jsx
import './Loader.scss';
import React from 'react';
import {connect} from 'react-redux';

export const Loader = (props) => (
  <div>
    Loading...
  </div>
);

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
```
