/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';
import CountingTextArea from '../../../CountingTextArea';
import FormatInput from '../../../FormatInput';

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

function FormDetail(props) {
  const { onChange } = props;
  return (
    <React.Fragment>
      <div className="form-group required">
        <label htmlFor="truck_plate">Truck Plate</label>
        <FormatInput
          type="text"
          className="form-control"
          name="truck_plate"
          id="truck_plate"
          placeholder="Enter Truck Plate"
          onChange={value => onChange({ ...INITIALZING_STATE, truck_plate: value })}
          formatType="truck_plate"
          required
        />
      </div>
      <div className="form-group required">
        <label htmlFor="status">Status</label>
        <select
          className="form-control"
          name="status"
          id="status"
          onChange={event => onChange({ ...INITIALZING_STATE, status: event.target.value })}
          required
        >
          <option value={1}>New</option>
          <option value={2}>In-Use</option>
          <option value={3}>Stopped</option>
        </select>
      </div>
      <div className="form-group required">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className="form-control"
          name="price"
          id="price"
          onChange={event => onChange({ ...INITIALZING_STATE, price: event.target.value })}
          placeholder="Enter Price"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="truck_type">Truck Type</label>
        <input
          type="text"
          className="form-control"
          name="truck_type"
          id="truck_type"
          onChange={event => onChange({ ...INITIALZING_STATE, truck_type: event.target.value })}
          placeholder="Enter Truck Type"
        />
      </div>
      <div className="form-group">
        <label htmlFor="production_in_year">Production In Year</label>
        <input
          type="number"
          className="form-control"
          name="production_in_year"
          id="production_in_year"
          onChange={event =>
            onChange({ ...INITIALZING_STATE, production_in_year: event.target.value })
          }
          placeholder="Enter Production In Year"
        />
      </div>
      <div className="form-group">
        <label htmlFor="dimension">Dimension</label>
        <input
          type="text"
          className="form-control"
          name="dimension"
          id="dimension"
          onChange={event => onChange({ ...INITIALZING_STATE, dimension: event.target.value })}
          placeholder="Enter Dimension"
        />
      </div>
      <div className="form-group required">
        <label htmlFor="cargo_type">Cargo Type</label>
        <Typeahead
          id="cargo_type"
          name="cargo_type"
          placeholder="Enter Cargo Type"
          filterBy={['value']}
          labelKey="value"
          multiple
          onChange={value => onChange({ ...INITIALZING_STATE, cargo_type: value })}
          options={[
            { key: 'Computer', value: 'Computer' },
            { key: 'Electronic', value: 'Electronic' },
            { key: 'Vegetable', value: 'Vegetable' },
            { key: 'Kid toys', value: 'Kid toys' },
          ]}
          required
        />
      </div>
      <div className="form-group required">
        <label htmlFor="driver">Driver</label>
        <Typeahead
          required
          id="driver"
          name="driver"
          placeholder="Enter Driver"
          filterBy={['value']}
          onChange={value => onChange({ ...INITIALZING_STATE, driver: value })}
          labelKey="value"
          options={[
            { key: 'Nguyen Van A', value: 'Nguyen Van A' },
            { key: 'Nguyen Van B', value: 'Nguyen Van B' },
            { key: 'Nguyen Van C', value: 'Nguyen Van C' },
            { key: 'Nguyen Van D', value: 'Nguyen Van D' },
          ]}
        />
      </div>
      <div className="form-group">
        <label htmlFor="parking_address">Parking address</label>
        <CountingTextArea
          className="form-control"
          id="parking_address"
          name="parking_address"
          onChange={event =>
            onChange({ ...INITIALZING_STATE, parking_address: event.target.value })
          }
          rows="5"
          maxLength={500}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <CountingTextArea
          className="form-control"
          id="description"
          name="description"
          rows="3"
          onChange={event => onChange({ ...INITIALZING_STATE, description: event.target.value })}
          maxLength={500}
        />
      </div>
    </React.Fragment>
  );
}

FormDetail.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FormDetail;
