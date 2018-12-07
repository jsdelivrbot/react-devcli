---
title: HOC Components
sidebar_label: HOC
---

`HOC` (Higher Order Components) are very much like `container` components
except they don't take `children` as input but they take another `component`
as input and `decorate` it.

HOCs are very suitable for component `composition` and they heavily promote
`reuse of code` as much as possible, while having `lean` and `clean`
`presentation` components totally separated from `behavioral` components

It's easy to think of HOC as a `wrapper` around another `component`,
basically a `decorator` which make the component behave in a different
way, not affecting the component being wrapped at all.

Good to mention about HOCs is that they usually `pass down` the `input props`
to `input component`, basically `delegating` the props down.

Automatically adds `HOC` prefix at the end of filename)
or other prefix if specified in `react.config.js`

<br/>

<img align="left" src="https://cdn.jsdelivr.net/gh/steevehook/react-devcli@5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Creates Higher Order Component

```bash
react component make PrivateRoute --hoc
react component mk PrivateRoute --hoc
```

<br/>

The generated boilerplate should look something like this:

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';

export const PrivateRouteHOC = ({component: Component, ...restProps}) => (
  <Route component={
    (props) => (
      restProps.isAuthenticated ? (
        <div>
            <Component {...props} />
        </div>
      ) : (
          <Redirect to="/"/>
      )
    )
  }
  />
);
PrivateRouteHOC.propTypes = {
    component: PropTypes.func
};
```
