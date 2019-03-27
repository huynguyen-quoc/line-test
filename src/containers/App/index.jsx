import React from 'react';
import './style.scss';
import { Header } from 'components';
import Main from '../Main';

class App extends React.PureComponent {
  render() {
    return (
      <div id="main-app" className="d-flex flex-column h-100">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
