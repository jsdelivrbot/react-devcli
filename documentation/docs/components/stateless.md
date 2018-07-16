---
title: Stateless Components
sidebar_label: Stateless Components
---

Stateless components are components which hold no logic, yet they know how things
look, so they are also called presentational components.

It's useful to create `stateless functional` components when dealing with `presentational` components
which `don't` really deal with state and `businesss logic`, yet they just make use of `props`
and need `no` access to component `lifecycle methods`, which are only accessible when using class
declaration

<br/>

Creates functional stateless component `Home`

```bash
react component make Home --stateless
react component mk Home --stateless
```

<br/>

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
