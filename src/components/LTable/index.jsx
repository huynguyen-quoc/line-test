import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { convertStatus, formatString, sortArray } from 'utils/helpers';

function LTable({ items, pageIndex, pageSize, showDetail, deleteDetail }) {
  const [sort, setSort] = useState({ field: '', asc: false });
  const slidedItems = sortArray(items, sort.field, sort.asc).slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize,
  );
  return (
    <table className="table table-hover table-responsive-md table-sortable">
      <thead>
        <tr>
          <th
            className={`text-center sortable ${
              sort.field === 'truck_plate' && sort.asc ? 'asc' : 'desc'
            }`}
            onClick={() => setSort({ field: 'truck_plate', asc: !sort.asc })}
          >
            Truck Plate
          </th>
          <th className="text-center">Cargo type</th>
          <th className="text-center">Driver</th>
          <th className="text-center">Truck type</th>
          <th className="text-center">Price</th>
          <th className="text-center">Dimension (L-W-H)</th>
          <th className="text-center">Parking address</th>
          <th className="text-center">Production year</th>
          <th
            className={`text-center sortable ${
              sort.field === 'status' && sort.asc ? 'asc' : 'desc'
            }`}
            onClick={() => setSort({ field: 'status', asc: !sort.asc })}
          >
            Status
          </th>
          <th className="text-center">Description</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {slidedItems.length <= 0 ? (
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td className="text-center"> No Data</td>
            <td />
            <td />
            <td />
            <td />
          </tr>
        ) : (
          slidedItems.map((data, index) => (
            <tr className="text-center" key={index}>
              <td>{data.truck_plate}</td>
              <td>{data.cargo_type.map(e => e.value).join(',')}</td>
              <td>{data.driver.map(e => e.value).join('')}</td>
              <td>{data.truck_type}</td>
              <td>{formatString(data.price, 'price')}</td>
              <td>{data.dimension}</td>
              <td>{data.parking_address}</td>
              <td>{data.production_in_year}</td>
              <td>{convertStatus(data.status)}</td>
              <td>{data.description}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => showDetail(data, index)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => deleteDetail(data, index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

LTable.propTypes = {
  items: PropTypes.array.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  showDetail: PropTypes.func.isRequired,
  deleteDetail: PropTypes.func.isRequired,
};

export default LTable;
