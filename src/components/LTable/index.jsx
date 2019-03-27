import React from 'react';
import PropTypes from 'prop-types';
import { convertStatus } from 'utils/helpers';

function LTable({ items, pageIndex, pageSize }) {
  return (
    <table className="table table-hover table-responsive">
      <thead>
        <tr>
          <th className="text-center">Truck Plate</th>
          <th className="text-center">Cargo type</th>
          <th className="text-center">Driver</th>
          <th className="text-center">Truck type</th>
          <th className="text-center">Price</th>
          <th className="text-center">Dimension (L-W-H)</th>
          <th className="text-center">Parking address</th>
          <th className="text-center">Production year</th>
          <th className="text-center">Status</th>
          <th className="text-center">Description</th>
        </tr>
      </thead>
      <tbody>
        {items.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize).map((data, index) => (
          <tr className="text-center" key={index}>
            <td>{data.truck_plate}</td>
            <td>{data.cargo_type}</td>
            <td>{data.driver}</td>
            <td>{data.truck_type}</td>
            <td>{data.price}</td>
            <td>{data.dimension}</td>
            <td>{data.parking_address}</td>
            <td>{data.production_year}</td>
            <td>{convertStatus(data.status)}</td>
            <td>{data.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

LTable.propTypes = {
  items: PropTypes.array.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default LTable;
