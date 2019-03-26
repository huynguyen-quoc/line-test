import React, { Suspense, memo } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from 'modules/history';
import { checkPermissions } from 'modules/helpers';
import { AppConfig } from '../../../constants';

export const LoadingMessage = () => "I'm loading...";

export function PrivateRouter(props) {
  const { userPermissions, routes, NotFoundPage } = props;
  return (
    <ConnectedRouter history={history}>
      <Suspense fallback={<LoadingMessage />}>
        <Switch>
          {routes.map(route => {
            const { path, exact, ...rest } = route;
            const permited = checkPermissions(userPermissions, route.permissions);
            return permited ? (
              <Route exact={exact} key={path} path={`${AppConfig.routePrefix}${path}`} {...rest} />
            ) : (
              <Redirect
                key={path}
                path={`${AppConfig.routePrefix}${path}`}
                {...rest}
                to={{
                  pathname: `${AppConfig.routePrefix}/404`,
                }}
              />
            );
          })}
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  );
}

PrivateRouter.propTypes = {
  NotFoundPage: PropTypes.any.isRequired,
  routes: PropTypes.array.isRequired,
  userPermissions: PropTypes.array.isRequired,
};

export default memo(PrivateRouter);
