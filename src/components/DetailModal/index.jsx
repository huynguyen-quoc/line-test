import React from 'react';
import PropTypes from 'prop-types';
import FormDetail from './components/DetailForm';
import './style.scss';

function DetailModal(props) {
  const { isShow, onClose, title, onSubmit, onFieldsChange } = props;
  return (
    <React.Fragment>
      <div className={`modal-back-drop  ${isShow ? 'modal-open' : ''}`}>
        <div className={`modal fade ${isShow ? 'show' : ''}`} tabIndex="-1" role="dialog">
          <div className="modal-dialog  modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => onClose()}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={onSubmit} noValidate autoComplete="off">
                <div className="modal-body">
                  <FormDetail onChange={onFieldsChange} />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={() => onClose()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

DetailModal.propTypes = {
  isShow: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onFieldsChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

DetailModal.defaultProps = {
  isShow: false,
};

export default DetailModal;
