---
title: Router
sidebar_label: Router
---

React Router is usually used when working with SPAs (Single Page Applications) and allows
routing to be handled on the client side, as opposed to the server side.
You can use it either in a SPA model or even in classic MPA model.
For more information check out
[React Router](https://reacttraining.com/react-router/web/guides/philosophy)

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Creates the application router and places the file in the location specified by `react.config.js` configuration

```bash
react router make
react router mk
    # Specifies a custom name for app router, by default is AppRouter
    -n
    --name

    # Specifies the page component(s) to be automatically added to the router
    -c
    --component
```

This will result in something like this:

```jsx
import createHistory from 'history/createBrowserHistory';

const AppHistory = createHistory();

const AppRouter = () => (
    <Router history={AppHistory}>
        <div>
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/login' component={LoginPage} exact={true}/>
                <Route path='/signup' component={SignUpPage} exact={true}/>
                <Route path='/anonymous' component={AnonymousPage} exact={true}/>
                <Route path='/chat' component={ChatJoinPage} exact={true}/>
                <Route path='/chat/:roomName' component={ChatRoomPage} exact={true}/>
                <Route path='/profile' component={ProfilePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);
```

<br/><br/>

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Removes the application router

```bash
react router remove
react router rm
    # Removes all routes inside the router
    -a
    --all
  
    # Dangerous! Removes all associated components along with the router
    --components
```

<br/><br/>

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Adds route for `HomePage` component

```bash
react router add HomePage
    # Creates HomePage component alongside route
    -c
    --component
  
    # The URL of the route, by default hyphenated i.e /home-page
    -r
    --route
  
    # Whether or not the routes matches the exact URL or not, true by default
    -e
    --exact
  
    # Specify a URL param for the route
    -p
    --param
```

This will result in the following generated code:

```jsx
<Route path='/home' component={HomePage} exact={true}/>
```

<br/><br/>

<img align="left" src="https://cdn.rawgit.com/steevehook/react-devcli/5ef47b56/icons/markers/draft.svg" height="35px">
<br/>

Removes the route for `HomePage` component from application router

```bash
react router remove HomePage
react router rm HomePage
    # Removes associated component along with the route
    -c
    --component
```
