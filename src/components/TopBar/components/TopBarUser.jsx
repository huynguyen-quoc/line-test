import React from 'react';
import userpic from 'assets/media/images/user1.png';
import PropTypes from 'prop-types';
import OPPopover from '../../OPElements/OPPopover';
import TopBarUserContent from './TopBarUserContent';

const initialState = {
  visible: false,
};
export class TopBarUser extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.changeVisible = this.changeVisible.bind(this);
    this.signOut = this.signOut.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  static propTypes = {
    changeLanguage: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
  };

  changeVisible(visible) {
    this.setState({ visible });
  }

  signOut(e) {
    const { logOut } = this.props;
    e.preventDefault();
    logOut();
  }

  changeLanguage(e) {
    const { changeLanguage } = this.props;
    e.preventDefault();
    changeLanguage();
  }

  render() {
    const content = (
      <TopBarUserContent className="op-user-content-list">
        <a className="link" onClick={this.signOut} href="#">
          Log Out
        </a>
        <a className="link" onClick={this.changeLanguage} href="#">
          Change Language
        </a>
      </TopBarUserContent>
    );
    const { visible } = this.state;
    return (
      <OPPopover
        content={content}
        trigger="click"
        visible={visible}
        onVisibleChange={this.changeVisible}
        arrowPointAtCenter={true}
        placement="bottomLeft"
      >
        <div className="user-image-wrapper">
          <img alt="user" src={userpic} />
          <span className="user-activity online" />
        </div>
      </OPPopover>
    );
  }
}

export default TopBarUser;
