import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatString } from '../../utils/helpers';

function FormatInput(props) {
  const { formatType, onChange, value, ...rest } = props;
  const [text, formatText] = useState(value || '');
  return (
    <React.Fragment>
      <input
        {...rest}
        onChange={event => {
          const formatStr = formatString(event.target.value, formatType);
          onChange(formatStr);
          formatText(formatStr);
        }}
        value={text}
      />
    </React.Fragment>
  );
}
FormatInput.propTypes = {
  formatType: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default FormatInput;
