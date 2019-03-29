/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';
import CountingTextArea from '../../../CountingTextArea';
import FormatInput from '../../../FormatInput';
import { validateResults } from '../../../../utils/helpers';


function FormDetail(props) {
  const { onChange, errors, values } = props;
  return (
    <React.Fragment>
      <div className="form-group required">
        <label htmlFor="truck_plate">Truck Plate</label>
        <FormatInput
          type="text"
          className={`form-control ${validateResults(errors, 'truck_plate').className}`}
          name="truck_plate"
          id="truck_plate"
          placeholder="Enter Truck Plate"
          value={values.truck_plate}
          onChange={value => onChange({ ...values, truck_plate: value })}
          formatType="truck_plate"
          required
        />
        <div
          className={`${
            errors.truck_plate && errors.truck_plate.error ? 'invalid' : 'valid'
          }-feedback`}
        >
          {validateResults(errors, 'truck_plate').message}
        </div>
      </div>
      <div className="form-group required">
        <label htmlFor="status">Status</label>
        <select
          className={`form-control ${validateResults(errors, 'status').className}`}
          name="status"
          id="status"
          onChange={event => onChange({ ...values, status: event.target.value })}
          required
          defaultValue={values.status}
        >
          <option value="">Select Status</option>
          <option value={1}>New</option>
          <option value={2}>In-Use</option>
          <option value={3}>Stopped</option>
        </select>
        <div className={`${errors.status && errors.status.error ? 'invalid' : 'valid'}-feedback`}>
          {validateResults(errors, 'status').message}
        </div>
      </div>
      <div className="form-group required">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className={`form-control ${validateResults(errors, 'price').className}`}
          name="price"
          id="price"
          value={values.price}
          onChange={event => onChange({ ...values, price: event.target.value })}
          placeholder="Enter Price"
          required
        />
        <div className={`${errors.price && errors.price.error ? 'invalid' : 'valid'}-feedback`}>
          {validateResults(errors, 'price').message}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="truck_type">Truck Type</label>
        <input
          type="text"
          className={`form-control ${validateResults(errors, 'truck_type').className}`}
          name="truck_type"
          id="truck_type"
          value={values.truck_type}
          onChange={event => onChange({ ...values, truck_type: event.target.value })}
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
          value={values.production_in_year}
          onChange={event => onChange({ ...values, production_in_year: event.target.value })}
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
          value={values.dimension}
          onChange={event => onChange({ ...values, dimension: event.target.value })}
          placeholder="Enter Dimension"
        />
      </div>
      <div className="form-group required">
        <label htmlFor="cargo_type">Cargo Type</label>
        <Typeahead
          id="cargo_type"
          name="cargo_type"
          isInvalid={errors.cargo_type && errors.cargo_type.error}
          isValid={errors.cargo_type && !errors.cargo_type.error}
          placeholder="Enter Cargo Type"
          filterBy={['value']}
          labelKey="value"
          selected={values.cargo_type}
          multiple
          onChange={value => onChange({ ...values, cargo_type: value })}
          options={[
            { key: 'Computer', value: 'Computer' },
            { key: 'Electronic', value: 'Electronic' },
            { key: 'Vegetable', value: 'Vegetable' },
            { key: 'Kid toys', value: 'Kid toys' },
          ]}
          required
        />
        <div
          className={`${
            errors.cargo_type && errors.cargo_type.error ? 'invalid' : 'valid'
          }-feedback`}
          style={errors.cargo_type && errors.cargo_type.error ? { display: 'block' } : {}}
        >
          {validateResults(errors, 'cargo_type').message}
        </div>
      </div>
      <div className="form-group required">
        <label htmlFor="driver">Driver</label>
        <Typeahead
          isInvalid={errors.driver && errors.driver.error}
          isValid={errors.driver && !errors.driver.error}
          id="driver"
          name="driver"
          placeholder="Enter Driver"
          filterBy={['value']}
          selected={values.driver}
          onChange={value => onChange({ ...values, driver: value })}
          labelKey="value"
          options={[
            { key: 'Nguyen Van A', value: 'Nguyen Van A' },
            { key: 'Nguyen Van B', value: 'Nguyen Van B' },
            { key: 'Nguyen Van C', value: 'Nguyen Van C' },
            { key: 'Nguyen Van D', value: 'Nguyen Van D' },
          ]}
        />
        <div
          className={`${errors.driver && errors.driver.error ? 'invalid' : 'valid'}-feedback`}
          style={errors.driver && errors.driver.error ? { display: 'block' } : {}}
        >
          {validateResults(errors, 'driver').message}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="parking_address">Parking address</label>
        <CountingTextArea
          className="form-control"
          id="parking_address"
          name="parking_address"
          value={values.parking_address}
          onChange={event => onChange({ ...values, parking_address: event.target.value })}
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
          value={values.description}
          onChange={event => onChange({ ...values, description: event.target.value })}
          maxLength={500}
        />
      </div>
    </React.Fragment>
  );
}

FormDetail.propTypes = {
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object,
};

FormDetail.defaultProps = {
  errors: {},
  values: {},
};

export default FormDetail;
