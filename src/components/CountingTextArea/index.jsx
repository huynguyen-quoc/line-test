import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CountingTextArea(props) {
  const { maxLength, onChange, ...rest } = props;
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <textarea
        {...rest}
        onChange={event => {
          setCount(event.target.value.length);
          onChange(event);
        }}
      />
      <small className="d-flex justify-content-end mt-1">
        {count}/{maxLength}
      </small>
    </React.Fragment>
  );
}
CountingTextArea.propTypes = {
  maxLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default CountingTextArea;
