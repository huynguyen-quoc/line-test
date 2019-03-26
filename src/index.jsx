// Polyfills
import React from 'react';
import ReactDOM from 'react-dom';
import './antd.less';
import './scss/styles.scss';

import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { store, persistor } from 'store/index';
import App from 'containers/App/index';

export const app = {
  cssRetries: 0,
  fetchRetries: 0,

  run() {
    this.render(App);

    /* istanbul ignore else */
    if (process.env.NODE_ENV === 'production') {
      this.initOfflinePlugin();
    }
  },
  initOfflinePlugin() {
    const OfflinePlugin = require('offline-plugin/runtime');

    /* istanbul ignore next */
    OfflinePlugin.install({
      onUpdateReady: () => {
        OfflinePlugin.applyUpdate();
      },
      onUpdated: () => {},
    });
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
