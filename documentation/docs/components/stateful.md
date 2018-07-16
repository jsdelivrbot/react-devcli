---
title: Stateful Components
sidebar_label: Stateful Components
---

Stateful components are components which manage their own state and/or
make use of lifecycle methods, which usually implies change of state or some side effects.

It's useful to create `stateful` components when dealing with either `lifecycle methods` which usually imply `state management`, or when component itself holds `business logic` and/or it's own `state`, which need to be managed. However is highly recommended to use a `container` component or
`HOC` to make logic reusable, if it's the case of course.

<br/>

Creates stateful class component `Home`

```bash
react component make Home --stateful
react component mk Home --stateful
```

<br/>

The generated boilerplate should look something like this:

```jsx
import './Home.scss';
import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}
Home.propTypes = {
};
```
