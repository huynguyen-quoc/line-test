import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import OPLayoutContentWrapper from 'components/OPElements/OPLayoutContentWrapper';
import PrivateRouter from 'components/Router/PrivateRouter';
import SideBar from '../SideBar';
import TopBar from '../TopBar';
import { AppRoutes as routes } from '../../constants';
import ScrollBar from '../ScrollBar';

const { Content } = Layout;

class DashBoardApp extends React.PureComponent {
  static propTypes = {
    app: PropTypes.object.isRequired,
    changeLanguage: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    logOut: PropTypes.func.isRequired,
    NotFoundPage: PropTypes.any.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    toggleOpenStateMenu: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  render() {
    const {
      user,
      app,
      toggleMenu,
      logOut,
      toggleOpenStateMenu,
      changeLanguage,
      location,
      NotFoundPage,
    } = this.props;
    const { auth } = user;
    const { permissions } = auth;
    return (
      <Layout style={{ height: '100vh' }}>
        <TopBar app={app} toggleMenu={toggleMenu} logOut={logOut} changeLanguage={changeLanguage} />
        <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
          <SideBar
            app={app}
            user={user}
            toggleOpenStateMenu={toggleOpenStateMenu}
            location={location}
          />
          <Content
            id="op-main-content"
            data-testid="MainContent"
            style={{
              padding: '70px 0 0 0',
              flexShrink: '1',
              background: '#ffffff',
              position: 'relative',
            }}
          >
            <ScrollBar>
              <OPLayoutContentWrapper>
                <PrivateRouter
                  userPermissions={permissions}
                  routes={routes}
                  NotFoundPage={NotFoundPage}
                />
              </OPLayoutContentWrapper>
            </ScrollBar>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DashBoardApp;
