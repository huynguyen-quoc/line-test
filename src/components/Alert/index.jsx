import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
  const { message, type, isShow } = props;
  if (!isShow) {
    return null;
  }
  return (
    <div className={`mt-3 alert alert-${type}`} role="alert">
      {message}
    </div>
  );
}

Alert.propTypes = {
  isShow: PropTypes.bool,
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Alert.defaultProps = {
  type: 'info',
  isShow: false,
};

export default Alert;
