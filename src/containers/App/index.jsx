import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Header, Main } from 'components';

class App extends React.PureComponent {
  render() {
    return (
      <div className="d-flex flex-column h-100">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
