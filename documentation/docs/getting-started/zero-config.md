---
title: Zero Config
sidebar_label: Zero Config
---

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Initializes react-devcli configuration file
and places it under `react.config.js`

Adding the `-y` flag will generate this default configuration
```bash
react init
    # Generates react default configuration file without any prompts
    -y
    --yes
```

<br/>

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Creates a new react application, with a simple example based on
`react.config.js` configuration file or
using `default configuration` if none provided. It also creates a
`small example` to play around with

```bash
react new app
    # Only creates the directory structure without any example
    --no-example
```

#### FIY
For more info about the configuration that gets generated,
check out [react.config.js](configuration.md)

For more info about the application structure that gets created,
check out [Application Structure](application-structure.md)
