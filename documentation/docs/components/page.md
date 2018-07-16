---
title: Page Components
sidebar_label: Page Components
---

Page components are nothing else but `stateless functional` components which are just
a wrapper around other `presentational` components, usually meant to render when a `route`
is accesed.

It is a good practice to use Page components when working with `React Router`, because
it's easier to distinguish between regular components and components which wrap the
presentation layer when accessing a route.

<br/>

Creates page component `Home`

Automatically adds `Page` prefix at the end of filename
or other prefix if specified in `react.config.js`

```bash
react component make Home --page
react component mk Home --page
```

<br/>

The generated boilerplate should look something like this:

```jsx
import './HomePage.scss';
import React from 'react';
import Welcome from './Welcome'
import Profile from './Profile';

export const HomePage = ({params}) => (
    <div>
        <Welcome/>
        <Profile id={params.userId}/>
    </div>
);
```
