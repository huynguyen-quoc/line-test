import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router';
import history from 'modules/history';
import { AppConfig } from '../../../constants';
import RoutePublic from './RoutePublic';
import RoutePrivate from './RoutePrivate';

export function PublicRouter(props) {
  const { isAuthenticated, DashBoardPage, NotFoundPage, LoginPage } = props;
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <RoutePublic exact path="/" isAuthenticated={isAuthenticated} component={LoginPage} />
        <RoutePrivate
          path={AppConfig.routePrefix}
          isAuthenticated={isAuthenticated}
          component={DashBoardPage}
        />
        <RoutePublic isAuthenticated={isAuthenticated} component={NotFoundPage} />
      </Switch>
    </ConnectedRouter>
  );
}

PublicRouter.propTypes = {
  DashBoardPage: PropTypes.any.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  LoginPage: PropTypes.any.isRequired,
  NotFoundPage: PropTypes.any.isRequired,
};

export default memo(PublicRouter);
