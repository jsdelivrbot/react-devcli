---
title: Stateless Components
sidebar_label: Stateless Components
---

It's useful to create `stateless functional` components when dealing with `presentational` components
which `don't` really deal with state and `businesss logic`, yet they just make use of `props`
and need `no` access to component `lifecycle methods`, which are only accessible when using class
declaration

Creates functional stateless component `Home`

```bash
react component make Home --stateless
react component mk Home --stateless
```

The generated boilerplate should look something like this:

```jsx
import './Home.scss';
import React from 'react';
import PropTypes from 'prop-types';

export const Home = (props) => (
    <div>
        Home
    </div>
);
Home.propTypes = {
};
```
