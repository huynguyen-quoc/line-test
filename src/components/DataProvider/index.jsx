import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_STATE = {
  items: [],
  pages: 0,
  pageIndex: 0,
  pageSize: 10,
};

export const DataContext = React.createContext(DEFAULT_STATE);

class DataProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
    this.pageChanged = this.pageChanged.bind(this);
  }

  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  pageChanged(pageIndex) {
    this.setState({ pageIndex });
  }

  render() {
    const { children } = this.props;
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          pageChanged: this.pageChanged,
        }}
      >
        {children}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
