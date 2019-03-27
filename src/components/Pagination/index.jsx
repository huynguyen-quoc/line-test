import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
  const { pages, pageIndex, pageChanged } = props;
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${pageIndex === 0 ? 'disabled' : ''}`}>
          <a
            className="page-link"
            tabIndex="-1"
            onClick={() => {
              pageChanged(pageIndex > 0 ? pageIndex - 1 : pageIndex);
            }}
          >
            Previous
          </a>
        </li>
        {pages.map(page => (
          <li key={page} className={`page-item ${page - 1 === pageIndex ? 'active' : ''}`}>
            <a
              className="page-link"
              onClick={() => {
                pageChanged(page - 1);
              }}
            >
              {page}
            </a>
          </li>
        ))}
        <li className={`page-item ${pageIndex >= pages.length - 1 ? 'disabled' : ''}`}>
          <a
            className="page-link"
            onClick={() => {
              pageChanged(pageIndex < pages.length - 1 ? pageIndex + 1 : pageIndex);
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  pageChanged: PropTypes.func.isRequired,
  pageIndex: PropTypes.number,
  pages: PropTypes.array.isRequired,
};

Pagination.defaultProps = {
  pageIndex: 0,
};

export default Pagination;
