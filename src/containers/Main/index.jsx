import React from 'react';
import { Main as MainComponent, LTable, Pagination } from 'components';
import { generatePages } from 'utils/helpers';
import { Data } from '../../constants';

const DEFAULT_STATE = {
  items: Data,
  pages: generatePages(Data.length / 10),
  pageIndex: 0,
  pageSize: 10,
};

export const DataContext = React.createContext(DEFAULT_STATE);

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
    this.pageChanged = this.pageChanged.bind(this);
  }

  pageChanged(pageIndex) {
    this.setState({ pageIndex });
  }

  render() {
    return (
      <MainComponent>
        <DataContext.Provider
          value={{
            ...this.state,
          }}
        >
          <DataContext.Consumer>
            {({ items, pageIndex, pageSize, pages }) => (
              <React.Fragment>
                <LTable items={items} pageIndex={pageIndex} pageSize={pageSize} />
                <Pagination
                  items={items}
                  pageIndex={pageIndex}
                  pages={pages}
                  pageSize={pageSize}
                  pageChanged={this.pageChanged}
                />
              </React.Fragment>
            )}
          </DataContext.Consumer>
        </DataContext.Provider>
      </MainComponent>
    );
  }
}
export default Main;
