---
title: Container Components
sidebar_label: Container
---

Container components are components which wrap other presentation components aka `stateless function`
components, yet they also contain logic, which can be reused across multiple presentation components.

`Container` components are very much like `HOC` components and they share a lot of things in
common yet they solve different problems. As opposed to HOC, container components
allow `children` to be `dumb` and not be aware of `decorated functionality` from parent (container)
component.

In general HOC receives a component as argument whereas container component
can contain different type of children and decorate them just like in case of HOC.

<br/>

<img align="left" src="https://cdn.jsdelivr.net/gh/steevehook/react-devcli@5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Automatically adds `Container` prefix at the end of filename)
or other prefix if specified in `react.config.js`

Creates container component

```bash
react component make CommentList --container
react component mk CommentList --container
```

<br/>

The generated boilerplate should look something like this:

```jsx
import React from 'react';

class CommentListContainer extends React.Component {
  state = {};
  
  async componentDidMount() {
      // async logic here
  }
  
  render() {
    return {this.props.children};
  }
}
```
