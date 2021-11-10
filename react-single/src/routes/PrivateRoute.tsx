import React from 'react';
import { Redirect, Route } from 'react-router';
import { isAuthenticated } from '../features/Auth';

type PrivateRouteProps = {
  component: React.ComponentType<any>,
  isAuthenticated?: boolean,
  path?: string,
  exact?: boolean,
}

export const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => (
  <Route {...rest} render={props => (
    isAuthenticated()
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)
