import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={() => {

        if (localStorage.getItem('authorizationToken')) {
            return <Component />
        }
        return <Redirect to='/friends' />
    }}
    />;
}

export default PrivateRoute;