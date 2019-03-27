// Polyfills
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'containers/App';
import './style.scss';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';

export const app = {
  cssRetries: 0,
  fetchRetries: 0,

  run() {
    this.render(App);
  },

  render(Component) {
    const root = document.getElementById('react');

    /* istanbul ignore next */
    if (root) {
      ReactDOM.render(
        <AppContainer>
          <Component />
        </AppContainer>,
        root,
      );
    }
  },
};

app.run();

/* istanbul ignore next  */
if (module.hot) {
  module.hot.accept('containers/App', () => {
    const NextApp = require('containers/App/index').default;
    app.render(NextApp);
  });
}
