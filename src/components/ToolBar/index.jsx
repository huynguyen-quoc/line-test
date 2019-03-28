import React from 'react';
import PropTypes from 'prop-types';

function ToolBar(props) {
  const { onCreate, createTitle } = props;
  return (
    <div className="btn-toolbar mb-3 justify-content-end mt-3" role="toolbar">
      <div className="btn-group mr-2" role="group">
        <button type="button" className="btn btn-primary" onClick={() => onCreate()}>
          {createTitle}
        </button>
      </div>
    </div>
  );
}

ToolBar.propTypes = {
  createTitle: PropTypes.string.isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default ToolBar;
