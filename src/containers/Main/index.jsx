import React from 'react';
import { Main as MainComponent, LTable, Pagination, DetailModal, ToolBar } from 'components';
import { generatePages } from 'utils/helpers';
import { Data } from '../../constants';

const DEFAULT_STATE = {
  items: Data,
  pages: generatePages(Data.length / 10),
  pageIndex: 0,
  pageSize: 10,
};

export const DataContext = React.createContext(DEFAULT_STATE);
const NEW_ITEM_TITLE = 'Create new truck';
const NEW_BUTTON_TITLE = 'Create new truck';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...DEFAULT_STATE,
      isShow: false,
      modalTitle: NEW_ITEM_TITLE,
      detail: {},
    };
    this.pageChanged = this.pageChanged.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.save = this.save.bind(this);
    this.onFieldsChange = this.onFieldsChange.bind(this);
  }

  pageChanged(pageIndex) {
    this.setState({ pageIndex });
  }

  onFieldsChange(fields) {
    this.setState({ detail: fields });
  }

  showModal(content) {
    if (content) {
      this.setState({ isShow: true, modalTitle: content.truck_plate });
    } else {
      this.setState({ isShow: true, modalTitle: NEW_ITEM_TITLE });
    }
  }

  save(event) {
    event.preventDefault();
  }

  closeModal() {
    this.setState({ isShow: false });
  }

  render() {
    const { isShow, modalTitle } = this.state;
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
                <ToolBar onCreate={this.showModal} createTitle={NEW_BUTTON_TITLE} />
                <LTable
                  items={items}
                  pageIndex={pageIndex}
                  pageSize={pageSize}
                  showDetail={this.showModal}
                />
                <Pagination
                  items={items}
                  pageIndex={pageIndex}
                  pages={pages}
                  pageSize={pageSize}
                  pageChanged={this.pageChanged}
                />
                <DetailModal
                  isShow={isShow}
                  onFieldsChange={this.onFieldsChange}
                  title={modalTitle}
                  onClose={this.closeModal}
                  onSubmit={this.save}
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
