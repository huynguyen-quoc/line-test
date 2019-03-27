import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Main extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <main className="flex-shrink-0">
        <div className="container">{children}</div>
      </main>
    );
  }
}

export default Main;
