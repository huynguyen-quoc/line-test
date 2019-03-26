import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from 'config';
import LoginPage from 'routes/Login';
import NotFoundPage from 'routes/NotFound';
import { injectIntl } from 'react-intl';
import PublicRouter from 'components/Router/PublicRouter';
import AppHolder from '../../style/appHolder';
import { AppTheme } from '../../constants';
import { changeStatusMenu } from '../../actions';
import DashBoardApp from '../DashBoard';
import messages from './messages';

export class App extends React.PureComponent {
  static propTypes = {
    app: PropTypes.object.isRequired,
    changeMenuStatusCollapsed: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  };

  /* istanbul ignore next */
  getView(width) {
    if (width > 1220) {
      return 'DesktopView';
    }
    if (width > 767) {
      return 'TabletView';
    }
    return 'MobileView';
  }

  /* istanbul ignore next */
  render() {
    const { user, changeMenuStatusCollapsed, intl, app } = this.props;
    return (
      <ThemeProvider theme={AppTheme}>
        <AppHolder>
          <PublicRouter
            isAuthenticated={user.isAuthenticated}
            DashBoardPage={DashBoardApp}
            LoginPage={LoginPage}
            NotFoundPage={NotFoundPage}
          />
        </AppHolder>
      </ThemeProvider>
    );
  }
}
/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app,
  };
}
/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    changeMenuStatusCollapsed: bindActionCreators(changeStatusMenu, dispatch),
  };
}

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default injectIntl(connectedApp, {
  withRef: true,
});
