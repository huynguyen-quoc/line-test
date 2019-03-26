import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import TopBarWrapper from './components/TopBarWrapper';
import TopBarHeader from './components/TopBarHeader';
import TopBarUser from './components/TopBarUser';

export class TopBar extends React.PureComponent {
  static propTypes = {
    app: PropTypes.object.isRequired,
    changeLanguage: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
    toggleMenu: PropTypes.func.isRequired,
  };

  render() {
    const { app, toggleMenu, logOut, changeLanguage } = this.props;
    const { collapsed } = app;
    return (
      <TopBarWrapper data-testid="MainTopBar">
        <TopBarHeader className={collapsed ? 'op-top-bar collapsed' : 'op-top-bar'}>
          <div className="op-left">
            <Icon
              className="menu-collapse-btn"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggleMenu}
            />
          </div>
          <ul className="op-right">
            <li className="op-user">
              <TopBarUser logOut={logOut} changeLanguage={changeLanguage} />
            </li>
          </ul>
        </TopBarHeader>
      </TopBarWrapper>
    );
  }
}

export default TopBar;
