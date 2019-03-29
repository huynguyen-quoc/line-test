import React from 'react';
import { Main as MainComponent, LTable, Pagination, DetailModal, ToolBar, Alert } from 'components';
import {
  generatePages,
  validateFields,
  appendData,
  getData,
  updateData,
  deleteData,
} from 'utils/helpers';

const DATA = getData('items') || [];
const PAGE_SIZE = 10;
const DEFAULT_STATE = {
  items: DATA,
  pages: generatePages(DATA.length / PAGE_SIZE),
  pageIndex: 0,
  pageSize: PAGE_SIZE,
};

const INITIALZING_STATE = {
  truck_plate: '',
  status: '',
  price: '',
  production_in_year: '',
  truck_type: '',
  dimension: '',
  cargo_type: [],
  driver: [],
  parking_address: '',
  description: '',
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
      detail: INITIALZING_STATE,
      errors: {},
      sortField: '',
      alert: {
        message: '',
        type: 'info',
        isShowAlert: false,
      },
    };
    this.pageChanged = this.pageChanged.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.save = this.save.bind(this);
    this.onFieldsChange = this.onFieldsChange.bind(this);
    this.insertData = this.insertData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.deleteDetail = this.deleteDetail.bind(this);
  }

  pageChanged(pageIndex) {
    this.setState({ pageIndex });
  }

  onFieldsChange(fields) {
    const errors = validateFields(fields);
    this.setState({ detail: fields, errors });
  }

  showModal(content, selected) {
    if (content) {
      this.setState({
        isShow: true,
        modalTitle: content.truck_plate,
        detail: content,
        errors: {},
        selected,
      });
    } else {
      this.setState({
        isShow: true,
        modalTitle: NEW_ITEM_TITLE,
        detail: INITIALZING_STATE,
        errors: {},
      });
    }
  }

  insertData() {
    const { detail, items } = this.state;
    appendData(detail, 'items');
    items.push(detail);
    const alert = {
      message: 'New Truck has been added.',
      type: 'success',
      isShowAlert: true,
    };
    this.setState({ detail, isShow: false, alert });
  }

  updateData() {
    const { detail, items, selected } = this.state;
    updateData(detail, 'items', selected);
    items[selected] = detail;
    const alert = {
      message: 'Truck has been updated.',
      type: 'success',
      isShowAlert: true,
    };
    this.setState({ detail, isShow: false, alert });
  }

  deleteDetail(data, index) {
    const { items } = this.state;
    deleteData(index, 'items');
    const alert = {
      message: 'Truck has been deleted.',
      type: 'success',
      isShowAlert: true,
    };
    items.splice(index, 1);
    this.setState({ isShow: false, alert, items });
  }

  save(event) {
    event.preventDefault();
    const { detail, modalTitle } = this.state;
    const errors = validateFields(detail);
    if (errors.error) {
      this.setState({ errors });
      return;
    }
    if (modalTitle === NEW_ITEM_TITLE) {
      this.insertData();
    } else {
      this.updateData();
    }
  }

  closeModal() {
    this.setState({ isShow: false });
  }

  render() {
    const { isShow, modalTitle, errors, detail, alert, sortField } = this.state;
    const { message, type, isShowAlert } = alert;
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
                <Alert message={message} isShow={isShowAlert} type={type} />
                <ToolBar onCreate={this.showModal} createTitle={NEW_BUTTON_TITLE} />
                <LTable
                  items={items}
                  sortField={sortField}
                  pageIndex={pageIndex}
                  pageSize={pageSize}
                  deleteDetail={this.deleteDetail}
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
                  errors={errors}
                  values={detail}
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
